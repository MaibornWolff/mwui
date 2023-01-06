import { getAssetPath } from '@stencil/core';

const iconCache = {};
const requestCache = {};

export async function fetchIcon({ icon }): Promise<string[]> {
  if (iconCache[icon]) {
    return iconCache[icon].split('::');
  }
  if (!requestCache[icon]) {
    requestCache[icon] = '';
    try {
      const data = await fetch(getAssetPath(`./assets/${icon}.svg.json`));
      requestCache[icon] = await data.json();
    } catch (e) {
      console.error(`"${icon}" is not a valid name`);
    }
  }
  iconCache[icon] = requestCache[icon];

  // added support for multiple paths for a single svg
  return requestCache[icon].split('::');
}
