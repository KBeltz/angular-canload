import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'admin',
    loadChildren: () => import('./feature/admin/admin.module').then(m => m.AdminModule)
  },
  { 
    path: '',
    loadChildren: () => import('./feature/general/general.module').then(m => m.GeneralModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }