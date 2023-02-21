# mw-img

<!-- Auto Generated Below -->

## Properties

| Property     | Attribute     | Description                                                                                                                                                                    | Type                     | Default     |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ----------- |
| `alt`        | `alt`         | Alt text for the image                                                                                                                                                         | `string`                 | `undefined` |
| `fallback`   | `fallback`    | URL of the image to be displayed when an error on load occurs                                                                                                                  | `string`                 | `undefined` |
| `lazyLoad`   | `lazy-load`   | If the image should be lazy loaded                                                                                                                                             | `boolean`                | `true`      |
| `preloadSrc` | `preload-src` | Image source for preload                                                                                                                                                       | `string`                 | `undefined` |
| `src`        | `src`         | Image source                                                                                                                                                                   | `string`                 | `undefined` |
| `srcset`     | `srcset`      | Different resolutions for different viewport sizes can be passed e.g. "img/vasen-420.webp 420w, img/vasen-980.webp 980w, img/vasen-1680.webp 1680w, img/vasen-2400.webp 2400w" | `SrcSetItem[] \| string` | `undefined` |

## Events

| Event          | Description                                  | Type               |
| -------------- | -------------------------------------------- | ------------------ |
| `imgDidLoad`   | Event emitted when image did load            | `CustomEvent<any>` |
| `imgLoadError` | Event emitted when image could not be loaded | `CustomEvent<any>` |

## Shadow Parts

| Part      | Description |
| --------- | ----------- |
| `"image"` |             |

---

_Built with [StencilJS](https://stenciljs.com/)_
