import Link from 'next/link';
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
export default function NotFound() {
  return <><SiteHeader interior /><main id="contenido" className="not-found container"><p className="eyebrow">404</p><h1>No encontramos<br />esta página.</h1><Link className="button button-dark" href="/#obras">Explorar las obras</Link></main><SiteFooter /></>;
}
