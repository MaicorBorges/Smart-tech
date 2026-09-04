'use client';
import { sitePath } from '@/utils/site-path';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

export function SiteHeader({ interior = false }: { interior?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll(); window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  const base = interior ? sitePath('/') : '';
  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <header className={`site-header ${scrolled || interior || open ? 'solid' : ''}`}>
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="Smart-tech, inicio">
          <Image src={sitePath("/images/logo.png")} alt="Smart-tech Ingeniería" width={180} height={75} priority />
        </Link>
        <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="main-menu" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
        <nav id="main-menu" className={open ? 'open' : ''} aria-label="Navegación principal">
          <a href={`${base}#empresa`} onClick={() => setOpen(false)}>Empresa</a>
          <a href={`${base}#servicios`} onClick={() => setOpen(false)}>Servicios</a>
          <a href={`${base}#obras`} onClick={() => setOpen(false)}>Obras</a>
          <a href={`${base}#contacto`} className="nav-contact" onClick={() => setOpen(false)}>Hablemos de tu proyecto <FiArrowUpRight aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  </>;
}
