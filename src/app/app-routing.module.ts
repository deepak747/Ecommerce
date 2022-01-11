import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderComponent } from './order/list-order/list-order.component';
import { HeaderComponent } from './site-layout/header/header.component';

const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
    //  {
    //    path:'order',
    //    component:ListOrderComponent
    //  },

     { path: 'site', loadChildren: () => import('./site-layout/site-layout.module').then(m => m.SiteLayoutModule) },
     
];

// const routes: Routes = [{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
//      {
//        path:'order',
//        component:ListOrderComponent
//      }
// ];



@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
