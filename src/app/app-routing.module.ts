import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
                        { path: '', pathMatch: 'full', redirectTo: 'products'},
                        { path: 'banner', loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule) }, 
                        { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, 
                        {path:'countdown-timer',loadChildren:()=>import('./countdown-timer/countdown-timer.module').then(m=>m.CountdownTimerModule)},
                        { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) }, 
                        { path: 'dynamically-div', loadChildren: () => import('./dynamically-div/dynamically-div.module').then(m => m.DynamicallyDivModule) },
                        {path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule) },
                        
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
