# Bera Solar — Proyecto

Este README existe para que Claude Code (o cualquiera que abra este repo) tenga
el contexto completo del negocio sin necesidad de reexplicarlo. Está escrito
a partir de las decisiones tomadas en una sesión de planeación previa.

## Qué es Bera Solar

Empresa de instalación y venta de paneles solares en Playa del Carmen,
Quintana Roo, México. Maneja instalación residencial, comercial y obra
completa (incluye hoteles/negocios). Ofrece financiamiento a meses sin
intereses (MSI) directo con banco afiliado (la afiliación ya se está
gestionando).

**Estructura de marca:**
- Bera Solar = marca madre / razón social
- Bera Solar Sureste = división activa (Quintana Roo, Yucatán, Campeche)
- Bera Solar Norte = división de expansión futura

**Equipo de instalación:** Alberto y su equipo instalan directamente,
sin subcontratar — es uno de los diferenciadores clave frente a otros
instaladores de la zona.

**Diferenciadores de venta (en orden de importancia dado por el cliente):**
1. Mejor precio
2. Financiamiento (MSI directo con banco)
3. Panel bifacial de mejor producto/rendimiento

## Estado legal / fiscal (pendiente de definir con contador)

- Se está evaluando constituir como S.A. de C.V. o S. de R.L. de C.V.
- Alta ante SAT con giro de instalación de sistemas fotovoltaicos
- **Importante:** todas las ventas (efectivo o tarjeta) deben declararse
  ante el SAT. No existe una modalidad legal de venta "en efectivo sin IVA
  no declarado" — eso es evasión fiscal, no una política de precios. Si
  quieren un precio distinto para pago de contado (por ahorro de comisión
  bancaria), es válido, pero la venta se declara igual.

## Financiamiento — Meses sin intereses

Modelo elegido: **MSI vía banco/financiera afiliada** (no financiamiento
directo del cliente por parte de Bera Solar). Flujo:

1. Cliente cotiza con Bera Solar
2. Solicita crédito MSI con el banco afiliado al firmar
3. Banco aprueba, Bera Solar recibe el pago de contado
4. Cliente paga sus mensualidades directo al banco

Documentos requeridos del cliente: identificación oficial, comprobante de
domicilio, tarjeta/línea de crédito aprobada con el banco afiliado.

## Trámite de interconexión CFE (para contenido de la web / soporte a clientes)

1. Solicitud de interconexión ante CFE (datos técnicos del sistema)
2. Dictamen técnico de CFE
3. Contrato de interconexión (cliente + CFE)
4. Cambio a medidor bidireccional
5. Puesta en marcha

Residencial: ~30-60 días hábiles después de instalado el sistema.
Comercial/hotelero: en media tensión, puede tardar más y requerir estudio
de demanda de carga adicional.

**Hoteles y negocios (regularización):** suelen operar en media tensión,
requieren contrato de gran usuario o servicio general, y coordinación con
CFE por capacidad de red en la zona. Bera Solar gestiona todo el trámite,
no solo la instalación — esto es un diferenciador frente a instaladores
que dejan al cliente solo con el papeleo.

## Catálogo técnico (de material de ventas ya generado por Bera Solar)

### Paneles
- Convencional: capta radiación solo por el frente
- Bifacial: capta por frente y parte trasera, hasta 15% más generación,
  mejor en techos claros/reflectivos
- Potencias disponibles: 605W, 630W, 645W, 715W, 720W, 730W
- Panel de referencia usado en propuestas: **JA Solar JAM66D46 LB 720W**
  (N-Type Bifacial/doble vidrio, eficiencia 23.2%, garantía de producto
  12 años, garantía de potencia lineal 30 años)

### Inversores
- **Tradicional**: conecta paneles en serie (string); si un panel falla,
  baja el rendimiento de todo el string
- **Microinversor**: uno por cada 4 paneles, monitoreo individual, mejor
  con sombras/inclinaciones distintas. Modelo de referencia: **SolaX
  X1-Micro 4 en 1 G2** (4 canales MPPT, WiFi integrado, IP67, hasta 97%
  eficiencia, 2500 VA salida máx.)
- **Híbrido**: permite conexión con baterías, trabaja con solar + red +
  batería, ideal para respaldo/independencia energética

### Estructura y materiales
- Estructura de aluminio de alta resistencia
- Tornillería de acero inoxidable
- Anclaje con sello impermeable (Sikaflex)
- Interruptores marca Square D

### Tipos de anclaje según techo
- Con expansor (losas de concreto)
- Taquete químico (losas de barro con teja)
- Clip especial (techos metálicos, sin perforación)
- Por contrapeso (sin perforación)
- Estructura con soporte móvil (permite mover paneles sin perforar)

**Nota:** no publicar precios ni presupuestos en el sitio — solo
especificaciones técnicas. Los precios se manejan en cotización directa
con el cliente.

## Tareas pendientes del negocio (no técnicas)

- [ ] Comprar el dominio (p. ej. `berasolar.com` o `berasolar.mx`)
- [ ] Dar de alta el correo corporativo (p. ej. `contacto@berasolar.com`)
- [ ] Tomar/recopilar fotos reales de proyectos instalados, para
      reemplazar las fotos de stock que trae el sitio por ahora

## Contenido del repo

```
bera-solar/
├── README.md              este archivo
├── sitio/
│   └── bera-solar.html    sitio web de muestra (estático, single-file)
└── cotizador/
    └── cotizador_cfe.py   script local que hace OCR a un recibo CFE
                            y calcula un tamaño de sistema estimado
```

### `sitio/bera-solar.html`

Landing page de una sola página, sin dependencias de build (HTML/CSS/JS
en un solo archivo, fuentes vía Google Fonts CDN). Incluye: hero, quiénes
somos, por qué elegirnos, servicios, tecnología y equipo, **calculadora
de sistema (cotizador rápido)**, proceso de instalación, financiamiento,
sección de hoteles/negocios, y formulario de cotización formal (con carga
de recibo CFE, validación de tamaño máx. 5 MB en el navegador — el envío
real y el procesamiento del archivo todavía no están conectados a un
backend).

**Fotos:** el sitio usa fotos de stock de Pexels (licencia gratuita para
uso comercial, sin necesidad de atribución) como placeholder en el hero,
"quiénes somos", tecnología, hoteles/negocios y un banner divisor. Cada
`<img>` tiene un comentario HTML arriba indicando que es foto de stock y
debe reemplazarse por fotos reales de instalaciones de Bera Solar (ver
tarea pendiente arriba). Cada imagen tiene un `onerror` que la oculta
sola si el link llegara a caerse, para que nunca se vea un ícono de
imagen rota.

**Calculadora de sistema (`#calculadora`):** cotizador instantáneo del
lado del cliente (JavaScript puro, sin backend) — el visitante captura su
consumo bimestral en kWh y ve al momento: consumo diario promedio, tamaño
de sistema recomendado (kW), número de paneles sugeridos y potencia
instalada total. Usa exactamente la misma fórmula que
`cotizador/cotizador_cfe.py` (horas sol pico, factor de pérdidas, días
por bimestre) — si se ajusta la fórmula en un lado, hay que ajustarla en
el otro (están documentados con el mismo comentario en ambos archivos).
Es un estimado preliminar, no un precio; el CTA de la calculadora manda
al formulario de cotización formal.

**Pendiente:**
- Conectar el formulario de cotización formal a un backend real (ej.
  Netlify Forms, o un endpoint propio) para que las cotizaciones lleguen
  a correo/CRM
- Recomendación de hosting dada: **Netlify** (por el manejo de
  formularios integrado sin backend propio). Vercel o Cloudflare Pages
  son alternativas si se necesita algo más dinámico a futuro.
- Conectar `cotizador_cfe.py` al formulario web (que el cliente suba su
  recibo y el backend lo procese automáticamente), en vez de que hoy solo
  valide tamaño de archivo en el navegador.

### `cotizador/cotizador_cfe.py`

Script de línea de comandos que usa OCR (Tesseract vía pytesseract) para
leer un recibo CFE en PDF/imagen, extraer el consumo en kWh, y calcular
un tamaño de sistema estimado (kW, número de paneles sugerido).

Uso: `python cotizador_cfe.py recibo.pdf`

**Revisión rápida antes del OCR (`parece_recibo_cfe()`):** antes de correr
el OCR (que es lo lento/pesado), el script hace una revisión barata sin
OCR del archivo para descartar de entrada lo que claramente no es un
recibo CFE:
- Verifica que la extensión y la cabecera del archivo (PDF/JPG/PNG)
  coincidan de verdad con el tipo declarado.
- Para PDFs, revisa que no tenga más de 3 páginas (un recibo CFE real
  trae 1-2) y busca en el texto extraíble (sin OCR) el RFC oficial de
  CFE (`CFE370814QI0`, es el mismo en todo el país) o el nombre "Comisión
  Federal de Electricidad" — esto se probó contra un recibo CFE real y sí
  aparece de forma legible aunque el resto del documento use una fuente
  protegida que vuelve el texto ilegible sin OCR.
- Si no encuentra esos marcadores pero sí encuentra "kWh", o si el PDF
  casi no tiene texto extraíble (típico cuando la fuente está protegida),
  igual lo deja pasar a OCR en vez de rechazarlo — para no bloquear un
  recibo válido por error.
- Si de plano no coincide con nada de esto (otro tipo de documento,
  demasiadas páginas, archivo corrupto), se rechaza antes de gastar OCR.
  Se puede saltar esta revisión con `--forzar-ocr` si estás seguro de que
  el archivo sí es un recibo.

**Estado actual:** herramienta interna de apoyo para el equipo de ventas,
no cotizador automático de cara al cliente todavía — el OCR puede fallar
en leer el número de kWh correctamente según el formato del recibo, así
que siempre marca el resultado como "preliminar, revisar antes de
enviar".

**Pendiente / próximos pasos discutidos:**
- Probar el script con recibos reales de clientes para medir qué tan
  seguido el OCR extrae el dato correcto, y qué tan seguido
  `parece_recibo_cfe()` deja pasar o rechaza recibos válidos
- Eventualmente conectar este procesamiento al formulario web (que el
  cliente suba el recibo en la página y el backend lo procese
  automáticamente) en vez de correrlo manualmente por CLI
- Definir si el resultado se sigue mandando a revisión humana antes de
  cotizar al cliente, o si se automatiza por completo una vez que el OCR
  sea confiable
