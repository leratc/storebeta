import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreBetaSharedLibsModule, StoreBetaSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [StoreBetaSharedLibsModule, StoreBetaSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [StoreBetaSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreBetaSharedModule {
  static forRoot() {
    return {
      ngModule: StoreBetaSharedModule
    };
  }
}
