import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./transacoes.component').then(c => c.TransacoesComponent),
    // component: TransacoesComponent,
    children: [
      {
        path: '',
        redirectTo: 'credito',
        pathMatch: 'full'
      },
      {
        path: 'credito',
        loadComponent: () => import('./components/credit/credit.component').then(c => c.CreditComponent)
      },
      {
        path: 'debito',
        loadComponent: () => import('./components/debit/debit.component').then(c => c.DebitComponent)
      }
    ]
  }
]
