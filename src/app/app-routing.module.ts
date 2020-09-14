import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'doctor',
    loadChildren: () => import('./pages/doctor-profile/doctor-profile.module').then( m => m.DoctorProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'appointment-confirmation',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./pages/appointment-step-confirmation/appointment-step-confirmation.module').then( m => m.AppointmentStepConfirmationPageModule)
  },
  {
    path: 'appointment-date',
    loadChildren: () => import('./pages/appointment-step-date/appointment-step-date.module').then( m => m.AppointmentStepDatePageModule)
  },
  {
    path: 'category-detail',
    loadChildren: () => import('./pages/category-listing/category-listing.module').then( m => m.CategoryListingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
