import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreBetaSharedModule } from 'app/shared';
import {
  InvoiceComponent,
  InvoiceDetailComponent,
  InvoiceUpdateComponent,
  InvoiceDeletePopupComponent,
  InvoiceDeleteDialogComponent,
  invoiceRoute,
  invoicePopupRoute
} from './';

const ENTITY_STATES = [...invoiceRoute, ...invoicePopupRoute];

@NgModule({
  imports: [StoreBetaSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    InvoiceComponent,
    InvoiceDetailComponent,
    InvoiceUpdateComponent,
    InvoiceDeleteDialogComponent,
    InvoiceDeletePopupComponent
  ],
  entryComponents: [InvoiceComponent, InvoiceUpdateComponent, InvoiceDeleteDialogComponent, InvoiceDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreBetaInvoiceModule {}
