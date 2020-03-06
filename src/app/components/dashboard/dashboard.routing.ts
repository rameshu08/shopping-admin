import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes:Routes = [
    {
        path:'', component: DashboardComponent, children:[
            {
                path:'', component: HomeComponent
            },
            {
                path:'home', component: HomeComponent
            },
            {
                path:'cart', component: CartComponent
            },
            {
                path:'**', redirectTo:'', pathMatch:'full'
            }]
    }
]

export const DashboardRoutes = RouterModule.forChild(routes);