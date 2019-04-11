import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        loadChildren: './product/product.module#StoreBetaProductModule'
      },
      {
        path: 'product-category',
        loadChildren: './product-category/product-category.module#StoreBetaProductCategoryModule'
      },
      {
        path: 'customer',
        loadChildren: './customer/customer.module#StoreBetaCustomerModule'
      },
      {
        path: 'product-order',
        loadChildren: './product-order/product-order.module#StoreBetaProductOrderModule'
      },
      {
        path: 'order-item',
        loadChildren: './order-item/order-item.module#StoreBetaOrderItemModule'
      },
      {
        path: 'invoice',
        loadChildren: './invoice/invoice.module#StoreBetaInvoiceModule'
      },
      {
        path: 'shipment',
        loadChildren: './shipment/shipment.module#StoreBetaShipmentModule'
      },
      {
        path: 'notification',
        loadChildren: './notification/notification.module#StoreBetaNotificationModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreBetaEntityModule {}
