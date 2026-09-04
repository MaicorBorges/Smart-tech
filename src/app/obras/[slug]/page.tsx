import { sitePath } from '@/utils/site-path';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '@/data/projects';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { BackToWorks } from '@/components/site/BackToWorks';

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export function generateMetadata({params}: {params: {slug:string}}): Metadata {
  const project = projects.find(p => p.slug === params.slug);
  return { title: project?.title ?? 'Obra', description: project?.lead };
}

export default function ProjectPage({params}: {params: {slug:string}}) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) notFound();
  const related = projects.find(p => p.category === project.category && p.slug !== project.slug)!;
  return <><SiteHeader interior /><main id="contenido" className="project-page">
    <div className="container"><BackToWorks /><div className="detail-title"><p className="eyebrow">{project.category.toUpperCase()} / {project.year}</p><h1>{project.title}</h1><p>{project.lead}</p></div>
      <div className="detail-grid"><figure className="detail-visual"><Image src={sitePath(project.image)} alt={project.imageAlt} width={1494} height={1050} priority sizes="(max-width: 900px) 100vw, 65vw" /><figcaption><span>{project.title}</span><span>{project.location}</span></figcaption></figure>
        <aside className="project-info" aria-label="Ficha de la obra"><p className="eyebrow">FICHA DE OBRA</p><dl><div><dt>Ámbito</dt><dd>{project.category}</dd></div><div><dt>Ubicación</dt><dd>{project.location}</dd></div><div><dt>Año de intervención</dt><dd>{project.year}</dd></div><div><dt>Integración</dt><dd>{project.highlight}</dd></div></dl><div className="project-technologies"><p>TECNOLOGÍAS Y SISTEMAS</p><div>{project.technologies.map(t=><span key={t}>{t}</span>)}</div></div><a href="#contacto" className="button button-dark">Consultar por un proyecto <FiArrowUpRight aria-hidden="true" /></a></aside>
      </div>
      <section className="project-description"><div><p className="eyebrow">LA INTERVENCIÓN</p><h2>Ingeniería aplicada<br /><span>a este proyecto.</span></h2></div><p>{project.description}</p></section>
      <section className="scope-section" aria-labelledby="scope-title"><h2 id="scope-title">Alcance de Smart-tech</h2><div className="scope-grid">{project.scope.map((s,i)=><article key={s.title}><span className="scope-index">0{i+1}</span><h3>{s.title}</h3><p>{s.description}</p></article>)}</div></section>
      <div className="related-project"><BackToWorks /><Link href={`/obras/${related.slug}/?tipo=${encodeURIComponent(project.category)}`}><span>OTRA OBRA / {project.category.toUpperCase()}</span><strong>{related.title} <FiArrowUpRight aria-hidden="true" /></strong></Link></div>
    </div>
  </main><SiteFooter /></>;
}
