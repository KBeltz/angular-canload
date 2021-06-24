import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [
  { 
    path: 'admin',
    loadChildren: () => import('./feature/admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuardService]
  },
  { 
    path: 'general',
    loadChildren: () => import('./feature/general/general.module').then(m => m.GeneralModule),
    canLoad: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }