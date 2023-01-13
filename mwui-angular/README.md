# The Liberation Machine

## MWUI - Angular Integration

Work in Progress

### Required fixes

#### Angular

To enable support for web components in Angular, add the following to the `@NgModule` in `app.module.ts`:

```TypeScript
schemas: [CUSTOM_ELEMENTS_SCHEMA];
```

