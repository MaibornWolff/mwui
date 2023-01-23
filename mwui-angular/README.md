# The Liberation Machine

## MWUI - Angular Integration

#### Angular

To use the Design-System import `MwuiComponentLibraryModule` in `app.module.ts`:

```TypeScript
  import { MwuiComponentLibraryModule } from "@maibornwolff/mwui-angular/dist/mwui-component-library"
  
  @NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      CommonModule,
      MwuiComponentLibraryModule,
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
```

