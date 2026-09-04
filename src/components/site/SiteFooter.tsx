import { sitePath } from '@/utils/site-path';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowUpRight, FiMail, FiPhone } from 'react-icons/fi';

export function SiteFooter() {
  return <>
    <section id="contacto" className="contact-section">
      <div className="container contact-grid">
        <div><p className="eyebrow"><span>04</span> CONTACTO</p><h2>Tu próximo proyecto.<br /><span>Una conversación.</span></h2><p className="contact-intro">Conversemos sobre los sistemas que necesitás integrar y el alcance de tu proyecto.</p></div>
        <div className="contact-links">
          <a href="mailto:info@smart-tech.com.uy"><span><FiMail aria-hidden="true" /> ESCRIBINOS</span><strong>info@smart-tech.com.uy</strong><FiArrowUpRight className="contact-arrow" aria-hidden="true" /></a>
          <a href="tel:+59891364050"><span><FiPhone aria-hidden="true" /> LLAMANOS</span><strong>+598 91 364 050</strong><FiArrowUpRight className="contact-arrow" aria-hidden="true" /></a>
          <p className="contact-location">Montevideo, Uruguay</p>
        </div>
      </div>
    </section>
    <footer className="site-footer"><div className="container footer-inner">
      <Link href="/" aria-label="Smart-tech, inicio"><Image src={sitePath("/images/logo.png")} alt="Smart-tech Ingeniería" width={135} height={56} /></Link>
      <p>Ingeniería e integración de sistemas.</p><span>© {new Date().getFullYear()} Smart-tech</span>
    </div></footer>
  </>;
}
