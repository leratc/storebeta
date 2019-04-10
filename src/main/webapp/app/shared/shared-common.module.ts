import { NgModule } from '@angular/core';

import { StoreBetaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [StoreBetaSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [StoreBetaSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class StoreBetaSharedCommonModule {}
