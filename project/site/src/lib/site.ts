/**
 * Site-wide media configuration. Non-localized things like image paths,
 * gallery order, the about video, the owner photo. Edited via Sveltia CMS.
 *
 * Localized text (captions, headlines, etc.) lives in src/i18n/<lang>.json
 * and is loaded via src/lib/i18n.ts.
 */

import siteData from '../data/site.json';

export interface GalleryItem {
  id: string;
  src: string;
  span: string;
}

export interface SiteConfig {
  hero: { photo: string };
  about: { video: string; poster: string };
  trustStrip: { ownerPhoto: string };
  gallery: { items: GalleryItem[] };
}

export const site: SiteConfig = siteData as SiteConfig;
