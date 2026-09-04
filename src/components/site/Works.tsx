'use client';
import { sitePath } from '@/utils/site-path';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { categories, projects, type Category } from '@/data/projects';

export function Works() {
  const [selected, setSelected] = useState<Category | 'Todas'>('Todas');
  useEffect(() => {
    const read = () => {
      const value = new URLSearchParams(window.location.search).get('tipo');
      setSelected(categories.includes(value as Category) ? value as Category : 'Todas');
    };
    read(); window.addEventListener('popstate', read);
    return () => window.removeEventListener('popstate', read);
  }, []);
  const select = (value: Category | 'Todas') => {
    setSelected(value);
    const url = new URL(window.location.href);
    if (value === 'Todas') url.searchParams.delete('tipo'); else url.searchParams.set('tipo', value);
    url.hash = 'obras'; window.history.replaceState(null, '', url.toString());
  };
  const visible = projects.filter(p => selected === 'Todas' || p.category === selected);
  return <section className="works-section" id="obras">
    <div className="container">
      <div className="section-top"><div><p className="eyebrow"><span>03</span> OBRAS</p><h2>La experiencia,<br /><span>en obra.</span></h2></div><p>Una selección de proyectos que muestra distintas escalas de integración, automatización y control.</p></div>
      <div className="works-toolbar"><div className="filters" aria-label="Filtrar obras por tipo">{['Todas', ...categories].map(category => <button type="button" key={category} aria-pressed={selected === category} className={selected === category ? 'active' : ''} onClick={() => select(category as Category | 'Todas')}>{category}</button>)}</div><span className="works-count" role="status" aria-live="polite">{String(visible.length).padStart(2, '0')} proyectos</span></div>
      <div className="projects-grid">
        {visible.map((project) => <Link key={project.slug} href={`/obras/${project.slug}/?tipo=${encodeURIComponent(selected)}`} className="project-card">
          <div className="project-image"><Image src={sitePath(project.image)} alt={project.imageAlt} width={1000} height={720} sizes="(max-width: 700px) 100vw, 50vw" /><span className="project-tag">{project.category}</span><span className="project-open"><FiArrowUpRight aria-hidden="true" /><span className="sr-only">Ver detalle</span></span></div>
          <div className="project-heading"><h3>{project.title}</h3><span>{project.year}</span></div><p>{project.location}</p>
        </Link>)}
      </div>
      <div className="portfolio-end"><span>Residencias · Edificios · Industria</span><a href="#contacto">Conversemos sobre tu proyecto <FiArrowUpRight aria-hidden="true" /></a></div>
    </div>
  </section>;
}
