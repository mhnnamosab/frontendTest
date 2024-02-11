import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './shared/routes/app.routes';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: AppRoutes.Home.RootHome },
  {
    path: AppRoutes.Auth,
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '' || AppRoutes.Home.RootHome,
    loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule),
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
