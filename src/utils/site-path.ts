/** Prefix assets and native anchors when the site is hosted in a subdirectory.
 * Next Link applies basePath itself, so its href must remain unprefixed.
 */
export function sitePath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
