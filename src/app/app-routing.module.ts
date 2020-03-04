import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'', component: AppComponent, children:[
      {
        path:'', redirectTo:'home', pathMatch:'full'
      },
      {
        path:'home', loadChildren: './components/dashboard/dashboard.module#DashboardModule'
      },
      // {
      //   path:'login', loadChildren:'./components/login/login.module#LoginModule'
      // },
      {
        path:'**', redirectTo:'', pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
