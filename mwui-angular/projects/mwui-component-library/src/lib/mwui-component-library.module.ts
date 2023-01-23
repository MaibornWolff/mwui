import { NgModule } from "@angular/core"
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from "@stencil-library/loader"

defineCustomElements(window);

const DECLARATIONS = [
  // generated proxies
  ...DIRECTIVES,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
})
export class MwuiComponentLibraryModule {}
