"""
Cotizador automático a partir de recibo CFE (Bera Solar)
=========================================================

Qué hace:
  1. Recibe un recibo de CFE en PDF o imagen (JPG/PNG).
  2. Le aplica OCR para extraer el texto.
  3. Busca el consumo en kWh del periodo (bimestral).
  4. Calcula un tamaño de sistema estimado y número de paneles sugeridos.
  5. Imprime (o guarda) una cotización preliminar — PARA REVISIÓN, no para
     enviar directo al cliente sin que alguien la revise.

Requisitos en tu computadora (no en este script, son del sistema operativo):
  - Tesseract OCR instalado:
      Windows:  https://github.com/UB-Mannheim/tesseract/wiki
      Mac:      brew install tesseract tesseract-lang
      Linux:    sudo apt install tesseract-ocr tesseract-ocr-spa
  - Poppler (solo si vas a procesar PDFs, no imágenes sueltas):
      Windows:  https://github.com/oschwartz10612/poppler-windows/releases
      Mac:      brew install poppler
      Linux:    sudo apt install poppler-utils

Instalación de librerías de Python:
  pip install pytesseract pdf2image pillow

Uso:
  python cotizador_cfe.py recibo.pdf
  python cotizador_cfe.py recibo.jpg
  python cotizador_cfe.py recibo.pdf --panel-w 720 --tarifa-limite-mb 5

IMPORTANTE — precisión del OCR:
  Los recibos de CFE varían en formato según tarifa y región. Este script
  busca patrones comunes ("kWh", "consumo total", etc.) pero puede fallar
  o leer mal un número. SIEMPRE revisa el dato extraído contra el recibo
  original antes de mandarle una cotización al cliente. Está pensado como
  apoyo para tu equipo de ventas, no como cotizador 100% autónomo todavía.
"""

import argparse
import os
import re
import sys

try:
    import pytesseract
    from PIL import Image
except ImportError:
    print("Faltan librerías. Instala con: pip install pytesseract pdf2image pillow")
    sys.exit(1)


# ---------------------------------------------------------------------------
# Parámetros de cálculo (ajustables según la zona / criterio de Bera Solar)
# ---------------------------------------------------------------------------
HORAS_SOL_PICO_PLAYA_DEL_CARMEN = 5.5   # horas de sol pico promedio en la región
FACTOR_PERDIDAS_SISTEMA = 0.80          # pérdidas por cableado, inversor, suciedad, etc.
DIAS_POR_PERIODO_BIMESTRAL = 60


def extraer_texto(ruta_archivo, dpi=300):
    """Convierte el archivo (PDF o imagen) a texto usando OCR."""
    ext = os.path.splitext(ruta_archivo)[1].lower()

    if ext == ".pdf":
        try:
            from pdf2image import convert_from_path
        except ImportError:
            print("Falta pdf2image. Instala con: pip install pdf2image")
            sys.exit(1)
        paginas = convert_from_path(ruta_archivo, dpi=dpi)
        texto_completo = ""
        for pagina in paginas:
            texto_completo += pytesseract.image_to_string(pagina, lang="spa") + "\n"
        return texto_completo
    else:
        imagen = Image.open(ruta_archivo)
        return pytesseract.image_to_string(imagen, lang="spa")


def extraer_consumo_kwh(texto):
    """
    Busca el consumo en kWh dentro del texto OCR.
    Intenta varios patrones porque el formato de CFE varía por tarifa/región.
    Devuelve el número más probable, o None si no encuentra nada confiable.
    """
    patrones = [
        r"consumo\s*total[:\s]*([\d,]+)\s*kwh",
        r"consumo[:\s]*([\d,]+)\s*kwh",
        r"([\d,]+)\s*kwh\s*(?:consumidos|del periodo|totales)",
        r"total\s*kwh[:\s]*([\d,]+)",
    ]
    texto_lower = texto.lower()

    candidatos = []
    for patron in patrones:
        for match in re.finditer(patron, texto_lower):
            valor = match.group(1).replace(",", "")
            if valor.isdigit():
                candidatos.append(int(valor))

    if not candidatos:
        # Último recurso: cualquier número seguido de "kwh"
        for match in re.finditer(r"([\d,]{2,6})\s*kwh", texto_lower):
            valor = match.group(1).replace(",", "")
            if valor.isdigit():
                candidatos.append(int(valor))

    if not candidatos:
        return None

    # Filtra valores poco realistas para consumo bimestral residencial/comercial
    candidatos_validos = [c for c in candidatos if 50 <= c <= 50000]
    if not candidatos_validos:
        return None

    # Se queda con el más frecuente/razonable (heurística simple)
    return max(candidatos_validos)


def calcular_sistema(kwh_bimestral, potencia_panel_w=720):
    """
    A partir del consumo bimestral en kWh, calcula:
      - consumo diario promedio
      - tamaño de sistema recomendado (kW)
      - número de paneles sugerido
    """
    kwh_diario = kwh_bimestral / DIAS_POR_PERIODO_BIMESTRAL

    kw_sistema = kwh_diario / (HORAS_SOL_PICO_PLAYA_DEL_CARMEN * FACTOR_PERDIDAS_SISTEMA)

    watts_sistema = kw_sistema * 1000
    numero_paneles = max(1, round(watts_sistema / potencia_panel_w))

    # Recalcula la potencia real instalada con paneles enteros
    potencia_instalada_w = numero_paneles * potencia_panel_w

    return {
        "kwh_bimestral": kwh_bimestral,
        "kwh_diario_promedio": round(kwh_diario, 1),
        "kw_sistema_recomendado": round(kw_sistema, 2),
        "numero_paneles_sugerido": numero_paneles,
        "potencia_panel_w": potencia_panel_w,
        "potencia_instalada_w": potencia_instalada_w,
    }


def main():
    parser = argparse.ArgumentParser(description="Cotizador automático a partir de recibo CFE (Bera Solar)")
    parser.add_argument("archivo", help="Ruta al PDF o imagen del recibo CFE")
    parser.add_argument("--panel-w", type=int, default=720,
                         help="Potencia del panel a usar en el cálculo (605-730). Default: 720")
    parser.add_argument("--limite-mb", type=float, default=5.0,
                         help="Límite de tamaño de archivo en MB. Default: 5")
    parser.add_argument("--mostrar-texto-ocr", action="store_true",
                         help="Imprime el texto crudo detectado por OCR (útil para depurar)")
    args = parser.parse_args()

    if not os.path.exists(args.archivo):
        print(f"No se encontró el archivo: {args.archivo}")
        sys.exit(1)

    tamano_mb = os.path.getsize(args.archivo) / (1024 * 1024)
    if tamano_mb > args.limite_mb:
        print(f"El archivo pesa {tamano_mb:.1f} MB, excede el límite de {args.limite_mb} MB.")
        sys.exit(1)

    print(f"Leyendo {args.archivo} ({tamano_mb:.1f} MB)...")
    texto = extraer_texto(args.archivo)

    if args.mostrar_texto_ocr:
        print("\n--- TEXTO DETECTADO POR OCR ---")
        print(texto)
        print("--- FIN TEXTO OCR ---\n")

    kwh = extraer_consumo_kwh(texto)

    if kwh is None:
        print("\nNo se pudo identificar el consumo en kWh automáticamente.")
        print("Revisa el recibo manualmente, o vuelve a correr con --mostrar-texto-ocr")
        print("para ver qué detectó el OCR y ajustar los patrones de búsqueda.")
        sys.exit(1)

    resultado = calcular_sistema(kwh, potencia_panel_w=args.panel_w)

    print("\n===== COTIZACIÓN PRELIMINAR (revisar antes de enviar) =====")
    print(f"Consumo detectado:            {resultado['kwh_bimestral']} kWh (bimestral)")
    print(f"Consumo diario promedio:      {resultado['kwh_diario_promedio']} kWh/día")
    print(f"Tamaño de sistema recomendado: {resultado['kw_sistema_recomendado']} kW")
    print(f"Paneles sugeridos:            {resultado['numero_paneles_sugerido']} x {resultado['potencia_panel_w']}W")
    print(f"Potencia instalada total:     {resultado['potencia_instalada_w']} W")
    print("=============================================================")
    print("\nRecuerda: confirma el dato de kWh contra el recibo original antes")
    print("de mandar esta cotización al cliente.")


if __name__ == "__main__":
    main()
