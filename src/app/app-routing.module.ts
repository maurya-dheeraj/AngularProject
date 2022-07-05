import { sharedStylesheetJitUrl } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{path:'home',loadChildren:()=> import('./layout/layout.module').then(m=> m.LayoutModule) },
{path:'', loadChildren:()=> import('./shared/shared.module').then(m=>m.SharedModule) }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
