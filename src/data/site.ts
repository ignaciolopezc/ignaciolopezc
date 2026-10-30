// Contenido editable del sitio. Cambiar textos aquí no requiere tocar el diseño.

export const SITE = {
  name: 'Ignacio López Campos',
  shortName: 'Ignacio López C.',
  url: 'https://ignaciolopezc.cl',
  email: 'ignaciolopezc@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ignaciolopezcampos',
  github: 'https://github.com/ignaciolopezc',
  cv: '/cv-ignacio-lopez-campos.pdf',
  jobTitle: 'Consultor en procesos, integración y automatización',
};

export const NAV = [
  { href: '#enfoque', label: 'Enfoque' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#casos', label: 'Casos' },
  { href: '#metodo', label: 'Cómo trabajo' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#faq', label: 'FAQ' },
];

export const KPIS = [
  { value: '+200', label: 'automatizaciones' },
  { value: '+30', label: 'proyectos' },
];

export const HERO_FLOW = ['Captura', 'Valida', 'Registra', 'Optimiza'];

export const PILLARS = [
  {
    title: 'Mejora de procesos',
    text: 'Levanto, modelo y simplifico el proceso antes de automatizarlo. Elimino pasos y acorto aprobaciones.',
  },
  {
    title: 'Conectividad de aplicaciones',
    text: 'SAP y otros ERP, APIs, bancos y gestores documentales trabajando juntos, sin traspasos manuales entre sistemas.',
  },
  {
    title: 'Estándares y buenas prácticas',
    text: 'Marcos de desarrollo, documentación, control de cambios y pasos a producción ordenados.',
  },
  {
    title: 'Automatización con impacto',
    text: 'UiPath, Automation Anywhere y Power Automate, con KPIs antes y después: tiempo, errores y horas ahorradas.',
  },
];

export const COMPARISON = {
  bot: [
    'Se automatiza el proceso tal como está, con sus pasos de más.',
    'Cada sistema sigue aislado y el bot hace de puente frágil.',
    'El conocimiento se va con quien lo desarrolló.',
  ],
  team: [
    'Primero se mejora el proceso, después se automatiza.',
    'Las aplicaciones se integran con APIs y conectores estables.',
    'Tu equipo queda con estándares, documentación y autonomía.',
  ],
};

export const SERVICES = [
  {
    title: 'Diagnóstico y rediseño de procesos',
    text: 'Levantamiento con las áreas, modelado del proceso, puntos de mejora y una lista priorizada de qué automatizar.',
    fit: 'Si aún no sabes por dónde partir',
  },
  {
    title: 'Integración y automatización',
    text: 'Bots en UiPath, Automation Anywhere o Power Automate conectados con SAP (ECC, S/4HANA, Business One), APIs y documentos.',
    fit: 'Si ya tienes procesos identificados',
  },
  {
    title: 'Estandarización de la operación RPA',
    text: 'Marcos de desarrollo, revisión de código, QA y pasos a producción para una fábrica o centro de excelencia RPA.',
    fit: 'Si tu equipo de bots está creciendo',
  },
  {
    title: 'Soporte y mejora continua',
    text: 'Mantención de automatizaciones existentes, control de cambios en sprints y mejoras a medida que cambia el negocio.',
    fit: 'Si ya tienes bots en producción',
  },
];

export const CASES = [
  {
    platform: 'UiPath',
    client: 'Minera Las Bambas',
    figure: '8',
    figureLabel: 'reportes SAP R/3 automatizados',
    title: 'Control de inventario automatizado',
    text: 'Descarga, procesamiento y publicación por API de reportes SAP en un dashboard de control, con REFramework para asegurar cada ejecución.',
  },
  {
    platform: 'Automation Anywhere 360',
    client: 'Codelco · IBM',
    figure: '3',
    figureLabel: 'áreas financieras levantadas para SAP S/4HANA',
    title: 'Finanzas y pago a proveedores',
    text: 'Levantamiento y automatización de procesos de Finanzas, Contabilidad y Pago a Proveedores durante la migración a SAP S/4HANA, calendarizados en Control Room.',
  },
  {
    platform: 'Power Automate',
    client: 'Tecno Fast',
    figure: '+50',
    figureLabel: 'flujos estandarizados',
    title: 'Procesos estandarizados e integrados',
    text: 'Estandaricé más de 50 flujos e integré Power Automate con SAP Business One, Docuware y el Banco Central.',
  },
];

export const METHOD = [
  { step: 'Levantar', text: 'Entrevistas con las áreas y observación del flujo real de trabajo.' },
  { step: 'Mejorar y estandarizar', text: 'Modelado del proceso, eliminación de pasos y reglas acordadas con el negocio.' },
  { step: 'Conectar y automatizar', text: 'Integraciones y bots en sprints, con estándares RPA para escalar y mantener.' },
  { step: 'Medir y transferir', text: 'KPIs antes y después, documentación y traspaso a tu equipo.' },
];

export const EXPERIENCE = [
  {
    period: '2025',
    role: 'IBM · Consultor senior de procesos RPA',
    text: 'Procesos financieros de Codelco para la migración a SAP S/4HANA, con Automation Anywhere 360.',
  },
  {
    period: '2023 – 2024',
    role: 'Tecno Fast · Consultor de procesos RPA',
    text: 'Estandarización de más de 50 flujos e integración de Power Automate con SAP Business One.',
  },
  {
    period: '2022 – 2023',
    role: 'Independiente · Consultor RPA',
    text: 'Automatizaciones con UiPath para Las Bambas y soporte de 14 bots en los sectores minero y automotriz.',
  },
  {
    period: '2020 – 2022',
    role: 'TBusiness · Consultor senior RPA',
    text: 'Escalamiento de una fábrica RPA con Scrum y estándares de desarrollo; selección de software RPA para clientes.',
  },
  {
    period: '2016 – 2019',
    role: 'Axity · Consultor senior SAP BPC',
    text: 'Más de 10 implementaciones de presupuesto y consolidación en minería, banca, construcción y retail.',
  },
  {
    period: '2009 – 2016',
    role: 'PwC Chile · Developer',
    text: 'Herramienta de conversión de estados financieros a XBRL para la CMF, en C# .NET y SQL Server.',
  },
];

export const EDUCATION = [
  { title: 'Ingeniería en Informática', detail: 'Duoc UC · 2015' },
  { title: 'Analista Programador Computacional', detail: 'Duoc UC · 2009' },
];

export const CERTIFICATIONS = [
  'UiPath Academy · Orchestrator y StudioX',
  'Automation Anywhere University · A360 e IQ Bot',
  'Workshop Scrum Master',
  'Bootcamps de Python y Big Data',
  'Power BI y Excel avanzado',
];

export const TOOLS = [
  { group: 'Automatización', items: 'UiPath · Automation Anywhere 360 · Power Automate · Python' },
  { group: 'ERP e integración', items: 'SAP ECC y S/4HANA · Business One · BPC · APIs REST · Docuware' },
  { group: 'Datos', items: 'SQL Server · PostgreSQL · Power BI · Excel' },
  { group: 'Gestión', items: 'Scrum · Jira · Notion' },
];

export const FAQ = [
  {
    q: '¿Qué procesos conviene automatizar primero?',
    a: 'Los repetitivos, con reglas claras y alto volumen. En el diagnóstico los priorizamos por esfuerzo e impacto, y muchas veces conviene mejorarlos antes de automatizarlos.',
  },
  {
    q: '¿Necesito tener una herramienta RPA para empezar?',
    a: 'No. Te ayudo a elegir la herramienta según tus procesos, tus sistemas y tu presupuesto.',
  },
  {
    q: '¿Cómo mides el impacto?',
    a: 'Definimos indicadores antes de empezar, como tiempo por transacción, errores y volumen procesado, y los comparamos al cierre.',
  },
  {
    q: '¿Qué pasa con los bots cuando termina el proyecto?',
    a: 'Quedan documentados y bajo estándares para que tu equipo los opere, o puedo seguir a cargo del soporte.',
  },
];

export const READY_FLOW = [
  { name: 'Experiencia', detail: (years: number) => `+${years} años en consultoría` },
  { name: 'Procesos', detail: () => 'levantar, modelar, mejorar' },
  { name: 'Integración', detail: () => 'SAP, ERP y APIs' },
  { name: 'Estándares', detail: () => 'buenas prácticas y RPA' },
];
