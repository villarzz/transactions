import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/inicio/inicio.component').then(c => c.InicioComponent)
  },
  {
    path: 'geral',
    loadChildren: () => import('./components/geral/geral.routes').then(m => m.routes)
  },
  {
    path:'transacoes',
    loadChildren: () => import('./components/transacoes/transacoes.routes').then(m => m.routes)
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found.component').then(c => c.NotFoundComponent)
  }
];
