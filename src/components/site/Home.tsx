import { sitePath } from '@/utils/site-path';
import Image from 'next/image';
import Link from 'next/link';
import { FiSun, FiWind, FiShield, FiActivity, FiCpu, FiTool, FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { Works } from './Works';

const services = [
  { icon: FiSun, title: 'Iluminación y sombreado', text: 'Control de iluminación, cortinas y persianas. Integramos luz natural y artificial para adaptar cada espacio a su uso.', tags: 'ILUMINACIÓN · CORTINAS · PERSIANAS' },
  { icon: FiWind, title: 'Climatización y energía', text: 'Automatización térmica y gestión de fuentes de energía. Coordinamos calefacción, aire acondicionado y salas de máquinas.', tags: 'HVAC · EFICIENCIA ENERGÉTICA' },
  { icon: FiShield, title: 'Seguridad, audio y video', text: 'Integramos accesos, alarmas, CCTV y sistemas audiovisuales. Soluciones para viviendas, edificios y salas de reuniones.', tags: 'ACCESOS · CCTV · AUDIOVISUALES' },
  { icon: FiActivity, title: 'Supervisión y monitoreo', text: 'Centralizamos la información de las instalaciones para visualizar, registrar y controlar sus variables de operación.', tags: 'BMS · SCADA · IoT' },
  { icon: FiCpu, title: 'Control industrial', text: 'Desarrollamos sistemas de control, tableros y programación de PLCs y RTUs. Desde el relevamiento hasta la puesta en marcha.', tags: 'PLC · RTU · TELECOMUNICACIONES' },
  { icon: FiTool, title: 'Ingeniería y consultoría', text: 'Proyecto, asesoramiento, dirección de obra y mantenimiento. Acompañamos a los profesionales en cada etapa de la instalación.', tags: 'PROYECTO · EJECUCIÓN · SOPORTE' },
];

export function Home() {
  return <>
    <SiteHeader />
    <main id="contenido">
      <section className="hero" aria-labelledby="hero-title">
        <Image className="hero-photo" src={sitePath("/images/plaza-alemania.jpg")} alt="Torre Plaza Alemania en Montevideo al atardecer" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-content"><p className="eyebrow hero-eyebrow">SMART-TECH / INGENIERÍA E INTEGRACIÓN</p><h1 id="hero-title">Integramos<br />tecnología.<br /><span>Conectamos<br className="mobile-break" /> sistemas.</span></h1><p className="hero-description">Automatización y control para residencias,<br className="desktop-break" /> edificios e industria.</p><div className="hero-actions"><a className="button button-green" href="#servicios">Nuestros servicios <FiArrowUpRight aria-hidden="true" /></a><a className="hero-work-link" href="#obras">Explorar obras <FiArrowDown aria-hidden="true" /></a></div></div>
        <div className="hero-bottom container"><a href="#empresa" className="hero-scroll"><FiArrowDown aria-hidden="true" /><span>CONOCÉ SMART-TECH</span></a><Link href="/obras/torre-plaza-alemania/" className="hero-featured"><span>OBRA DESTACADA / MONTEVIDEO</span><strong>Torre Plaza Alemania <FiArrowUpRight aria-hidden="true" /></strong></Link></div>
      </section>
      <section className="company-section" id="empresa"><div className="container company-grid">
        <div><p className="eyebrow"><span>01</span> LA EMPRESA</p><h2>Una visión integral.<br /><span>El control de<br />cada detalle.</span></h2></div>
        <div className="company-copy"><p className="company-lead">Ingeniería electrónica, control y telecomunicaciones trabajando en conjunto.</p><p>Desde 2009, Smart-tech integra tecnologías para resolver las necesidades de cada proyecto. Trabajamos junto a arquitectos, ingenieros y equipos de obra para llevar la automatización desde el diseño hasta su funcionamiento en el día a día.</p><div className="company-foot"><span>URUGUAY / DESDE 2009</span><a href="#servicios">Conocé nuestro alcance <FiArrowDown aria-hidden="true" /></a></div></div>
      </div></section>
      <section id="servicios" className="services-section"><div className="container">
        <div className="section-top"><div><p className="eyebrow"><span>02</span> SERVICIOS</p><h2>Cada sistema.<br /><span>Una solución integrada.</span></h2></div><p>Proyectamos, implementamos y ponemos en marcha soluciones que responden a la complejidad de cada instalación.</p></div>
        <div className="services-grid">{services.map(({icon:Icon,title,text},i) => <article className="service-card" key={title}><div className="service-card-top"><span className="service-icon"><Icon aria-hidden="true" /></span><span className="service-index">0{i+1}</span></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="technology-strip"><span>TECNOLOGÍAS QUE INTEGRAMOS</span><div><strong>KNX</strong><strong>DALI</strong><strong>BMS</strong><strong>SCADA</strong><strong>IoT</strong></div></div>
      </div></section>
      <Works />
    </main>
    <SiteFooter />
  </>;
}
