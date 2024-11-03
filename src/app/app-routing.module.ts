import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './develop/admin/login/login.component';
import { CardsComponent } from './component/card/card.component';
import { NgbdButtonsComponent } from './component/buttons/buttons.component';
import { LandingComponent } from './develop/website/landing/landing.component';
import { ContactUsComponent } from './develop/website/about-us/contact-us.component';

export const Approutes: Routes = [
  
    {path:'login',component:LoginComponent},
    {path:'shop',component:LandingComponent},
    {path:'',redirectTo:'shop',pathMatch:'full'},
    {path:'contact',component:ContactUsComponent},
    
    
   { path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'card', 
        component: CardsComponent
      },
      {
        path: 'button', 
        component: NgbdButtonsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
