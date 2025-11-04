import { Routes } from "@angular/router";
import { GeralComponent } from "./geral.component";

export const routes: Routes = [
  {
    path: '',
    component: GeralComponent,
    children: [
      {
        path: '',
        redirectTo: 'basica',
        pathMatch: 'full'
      },
      {
        path: 'basica',
        loadComponent: () => import('./components/basica/basica.component').then(c => c.BasicaComponent)
      },
      {
        path: 'contato',
        loadComponent: () => import('./components/contato/contato.component').then(c => c.ContatoComponent)
      },
      {
        path: 'endereco',
        loadComponent: () => import('./components/endereco/endereco.component').then(c => c.EnderecoComponent)
      }
    ]
  }
];
