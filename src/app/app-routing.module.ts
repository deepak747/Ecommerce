import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderComponent } from './order/list-order/list-order.component';
import { HeaderComponent } from './site-layout/header/header.component';

const routes: Routes = [
  //{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  

//{ path: 'add-card', loadChildren: () => import('./site-layout/site-layout.module').then(m => m.SiteLayoutModule) },

//  {
//    path:'',
//    children:[
//      {
//        path:'add-card',
//           loadChildren:()=>import('./site-layout/site-layout.module').then(m => m.SiteLayoutModule)
//      },
//    ]
//   }

];
           

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
