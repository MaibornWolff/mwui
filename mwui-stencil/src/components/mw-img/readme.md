# mw-img

<!-- Auto Generated Below -->

## Properties

| Property     | Attribute     | Description                        | Type      | Default     |
| ------------ | ------------- | ---------------------------------- | --------- | ----------- |
| `alt`        | `alt`         | Alt text for the image             | `string`  | `undefined` |
| `lazyLoad`   | `lazy-load`   | If the image should be lazy loaded | `boolean` | `true`      |
| `preloadSrc` | `preload-src` | Image source for preload           | `string`  | `undefined` |
| `src`        | `src`         | Image source                       | `string`  | `undefined` |

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
