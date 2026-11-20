import { DOCUMENT, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Cv } from './data/models';

const PERSON_NAME = 'Paweł Serafin';
const LINKEDIN_URL = 'https://www.linkedin.com/in/pawe%C5%82-serafin-26ba129a/';
const JSON_LD_ID = 'cv-person-jsonld';

/** "LEADER/SENIOR .NET/FULLSTACK DEVELOPER" -> "Leader/Senior .NET/Fullstack Developer" */
export function formatRole(role: string): string {
  return role
    .toLowerCase()
    .replace(/(^|[\s/])(\S)/g, (_, sep: string, c: string) => sep + c.toUpperCase())
    .replace(/\.net/gi, '.NET');
}

/**
 * Sets <title>, meta description, Open Graph / Twitter tags and schema.org Person JSON-LD.
 * Runs during prerendering, so the tags end up in the static HTML that crawlers and
 * link-preview bots read. Must be called in an injection context.
 */
export function applySeo(cv: Cv, years: number): void {
  const title = inject(Title);
  const meta = inject(Meta);
  const doc = inject(DOCUMENT);

  const role = formatRole(cv.experience[0]?.position ?? '');
  const core = cv.technologies.filter((t) => t.core).map((t) => t.name);
  const pageTitle = `${PERSON_NAME} – ${role} | CV`;
  const description =
    `${role} with ${years}+ years of experience in ${core.join(', ')}. ` +
    `${cv.location} · ${cv.workMode}.`;

  const site = (cv.siteUrl ?? '').replace(/\/+$/, '');
  const abs = (path: string) => (site ? `${site}/${path}` : '');
  const imageUrl = abs('og-image.png');

  title.setTitle(pageTitle);
  const tags: Record<string, string> = {
    description,
    'og:type': 'profile',
    'og:title': pageTitle,
    'og:description': description,
    'og:site_name': `${PERSON_NAME} – CV`,
    'profile:first_name': 'Paweł',
    'profile:last_name': 'Serafin',
    'twitter:card': 'summary_large_image',
    'twitter:title': pageTitle,
    'twitter:description': description,
  };
  if (site) {
    tags['og:url'] = site + '/';
    tags['og:image'] = imageUrl;
    tags['og:image:width'] = '1200';
    tags['og:image:height'] = '630';
    tags['og:image:alt'] = `${PERSON_NAME} – ${role}`;
    tags['twitter:image'] = imageUrl;
  }
  for (const [key, content] of Object.entries(tags)) {
    const attr = key.startsWith('og:') || key.startsWith('profile:') ? 'property' : 'name';
    meta.updateTag({ [attr]: key, content }, `${attr}="${key}"`);
  }

  if (site) {
    let canonical = doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = doc.createElement('link');
      canonical.rel = 'canonical';
      doc.head.appendChild(canonical);
    }
    canonical.href = site + '/';
  }

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSON_NAME,
    jobTitle: role,
    description,
    ...(site ? { url: site + '/', image: abs('photo.png') } : {}),
    address: { '@type': 'PostalAddress', addressLocality: 'Lublin', addressCountry: 'PL' },
    knowsAbout: cv.technologies.map((t) => t.name),
    knowsLanguage: cv.languages.map((l) => l.name),
    sameAs: [LINKEDIN_URL],
  };
  let script = doc.getElementById(JSON_LD_ID);
  if (!script) {
    script = doc.createElement('script');
    script.id = JSON_LD_ID;
    script.setAttribute('type', 'application/ld+json');
    doc.head.appendChild(script);
  }
  script.textContent = JSON.stringify(person);
}
