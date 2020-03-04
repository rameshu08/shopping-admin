import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, children: [
      {
        path: '', component: AuthenticationComponent
      },
      {
        path: 'auth', component: AuthenticationComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: '**', redirectTo: 'dashboard', pathMatch: 'full'
      }]
  },
      
];

export const LoginRoutes = RouterModule.forChild(routes);
