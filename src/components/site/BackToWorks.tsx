'use client';
import { sitePath } from '@/utils/site-path';
import { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { categories, type Category } from '@/data/projects';

export function BackToWorks() {
  const [href, setHref] = useState(sitePath('/#obras'));
  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get('tipo');
    if (categories.includes(value as Category)) setHref(sitePath(`/?tipo=${encodeURIComponent(value!)}#obras`));
  }, []);
  return <a className="back-link" href={href}><FiArrowLeft aria-hidden="true" /> Volver a obras</a>;
}
