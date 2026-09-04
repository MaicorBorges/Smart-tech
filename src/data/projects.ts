export type Category = 'Residencias' | 'Edificios' | 'Industria';
export type Project = {
  slug: string; title: string; category: Category; location: string; year: string;
  image: string; imageAlt: string; lead: string; description: string;
  scope: { title: string; description: string }[];
  technologies: string[]; highlight: string; source: string;
};
export const categories: Category[] = ['Residencias', 'Edificios', 'Industria'];
export const projects: Project[] = [
  {
    slug: 'torre-plaza-alemania', title: 'Torre Plaza Alemania', category: 'Edificios',
    location: 'Montevideo, Uruguay', year: '2019', image: '/images/plaza-alemania.jpg',
    imageAlt: 'Torre Plaza Alemania, obra de automatización de Smart-tech en Montevideo',
    lead: 'Iluminación, climatización y sombreado bajo un mismo sistema de control.',
    description: 'Smart-tech implementó el control de iluminación, acondicionamiento térmico y sombreado de Torre Plaza Alemania, un edificio con certificación LEED Gold. La integración por protocolos KNX y DALI permite la supervisión centralizada de las instalaciones mediante un sistema BMS.',
    scope: [
      { title: 'Iluminación', description: 'Control de la iluminación mediante la integración de los protocolos KNX y DALI.' },
      { title: 'Climatización y sombreado', description: 'Integración del acondicionamiento térmico y el control del sombreado del edificio.' },
      { title: 'Gestión centralizada', description: 'Supervisión y operación de las instalaciones desde el software BMS de NETxAutomation.' },
    ],
    technologies: ['KNX', 'DALI', 'BMS', 'NETxAutomation'], highlight: 'Control integral del edificio',
    source: 'http://smart-tech.com.uy/page/edificios',
  },
  {
    slug: 'residencia-la-curva', title: 'Residencia La Curva', category: 'Residencias',
    location: 'Punta del Este, Maldonado', year: '2014', image: '/images/la-curva.jpg',
    imageAlt: 'Residencia La Curva, proyecto de integración residencial en Punta del Este',
    lead: 'Una vivienda con sus instalaciones integradas, desde la iluminación hasta la sala de máquinas.',
    description: 'En la residencia Viñoly «La Curva», Smart-tech integró el control de iluminación, cortinas, calefacción por losa radiante, aire acondicionado y audio distribuido. La intervención incluyó la automatización de la sala de máquinas y la gestión de distintas fuentes de calor.',
    scope: [
      { title: 'Ambientes', description: 'Control de iluminación, cortinas, aire acondicionado, losa radiante y audio distribuido.' },
      { title: 'Sala de máquinas', description: 'Automatización de los sistemas de agua caliente sanitaria, piscina, hidromasaje y calefacción.' },
      { title: 'Fuentes de calor', description: 'Integración del funcionamiento de calderas a gas y paneles solares.' },
    ],
    technologies: ['Automatización residencial', 'HVAC', 'Audio distribuido'], highlight: 'Integración de múltiples sistemas',
    source: 'http://smart-tech.com.uy/page/residencias',
  },
  {
    slug: 'parques-eolicos', title: 'Parques eólicos', category: 'Industria',
    location: 'Diversas localidades, Uruguay', year: '2015–2017', image: '/images/parques-eolicos.jpg',
    imageAlt: 'Parque eólico, antecedente de control y telecomunicaciones de Smart-tech',
    lead: 'Control y telecomunicaciones para vincular la generación eólica con la operación de UTE.',
    description: 'Programación de unidades terminales remotas (RTU) para vincular plantas eólicas con el sistema SCADA de UTE. Los antecedentes comprenden Libertad, Rosario I y II, Cerro Chato, Florida I, Minas y Villa Rodríguez, además de servicios de telecomunicaciones y control.',
    scope: [
      { title: 'Integración con UTE', description: 'Programación de RTUs que vinculan cada planta con el sistema SCADA de control.' },
      { title: 'Control industrial', description: 'Servicios de control y programación de PLCs en las instalaciones.' },
      { title: 'Operación remota', description: 'Monitoreo, telecomunicaciones y programación remota de los sistemas.' },
    ],
    technologies: ['RTU', 'SCADA', 'PLC', 'Telecomunicaciones'], highlight: 'Generación conectada y supervisada',
    source: 'http://smart-tech.com.uy/page/industria',
  },
  {
    slug: 'torre-de-las-comunicaciones', title: 'Torre de las Comunicaciones', category: 'Edificios',
    location: 'Montevideo, Uruguay', year: '2016 · 2020', image: '/images/torre-antel.jpg',
    imageAlt: 'Torre de las Comunicaciones de ANTEL en Montevideo',
    lead: 'Renovación del control de iluminación en 17 pisos de la torre de ANTEL.',
    description: 'A través de una licitación pública, Smart-tech implementó el control inteligente de iluminación de 17 pisos de la Torre de las Comunicaciones. La intervención sustituyó la tecnología anterior por un sistema KNX-DALI con operación centralizada.',
    scope: [
      { title: 'Renovación tecnológica', description: 'Sustitución del sistema de control anterior e implementación de tecnología KNX-DALI.' },
      { title: 'Iluminación', description: 'Control inteligente de la iluminación en 17 pisos de la torre.' },
      { title: 'Supervisión', description: 'Control centralizado mediante un BMS de NETxAutomation.' },
    ],
    technologies: ['KNX', 'DALI', 'BMS', 'NETxAutomation'], highlight: '17 pisos con control centralizado',
    source: 'http://smart-tech.com.uy/page/edificios',
  },
  {
    slug: 'residencia-la-boudeusse', title: 'Residencia La Boudeusse', category: 'Residencias',
    location: 'Punta del Este, Maldonado', year: '2013', image: '/images/la-boudeusse.jpg',
    imageAlt: 'Residencia La Boudeusse, obra de automatización de Smart-tech en Punta del Este',
    lead: '350 puntos de control para integrar el funcionamiento de la vivienda.',
    description: 'Smart-tech implementó el control de iluminación, cortinas, calefacción por losa radiante, aire acondicionado y saunas de la residencia La Boudeusse. La instalación reúne 350 puntos de control con equipos KNX de JUNG y ABB.',
    scope: [
      { title: 'Iluminación y cortinas', description: 'Automatización de los sistemas de iluminación y sombreado de la vivienda.' },
      { title: 'Confort térmico', description: 'Control de calefacción por losa radiante, aire acondicionado y saunas.' },
      { title: 'Integración', description: 'Implementación de 350 puntos de control con dispositivos KNX de JUNG y ABB.' },
    ],
    technologies: ['KNX', 'JUNG', 'ABB'], highlight: '350 puntos de control',
    source: 'http://smart-tech.com.uy/page/residencias',
  },
  {
    slug: 'base-antartica', title: 'Base Antártica del Uruguay', category: 'Industria',
    location: 'Antártida', year: '2015', image: '/images/base-antartica.jpg',
    imageAlt: 'Base Antártica del Uruguay, antecedente de monitoreo energético de Smart-tech',
    lead: 'Medición y monitoreo remoto de energía en distintos puntos de la base.',
    description: 'En una intervención para EFICENER y UTE, Smart-tech suministró e instaló medidores para registrar el uso de energía en diferentes puntos de la Base Antártica del Uruguay, con monitoreo remoto de las mediciones.',
    scope: [
      { title: 'Instrumentación', description: 'Suministro e instalación de medidores de energía en distintos puntos de la base.' },
      { title: 'Registro energético', description: 'Medición de energía para conocer el comportamiento de las instalaciones.' },
      { title: 'Monitoreo remoto', description: 'Acceso remoto a las mediciones de los equipos instalados.' },
    ],
    technologies: ['Medición de energía', 'Monitoreo remoto'], highlight: 'Información energética a distancia',
    source: 'http://smart-tech.com.uy/page/industria',
  },
];
