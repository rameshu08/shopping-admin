import { NgModule } from "@angular/core";
import { CartComponent } from "./cart/cart.component";
import { DashboardRoutes } from "./dashboard.routing";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../header/header.component';


@NgModule({
    imports:[
        DashboardRoutes,
        CommonModule,
        
    ],
    declarations:[
        DashboardComponent,
        CartComponent,
        HomeComponent,
        HeaderComponent
    ]
})

export class DashboardModule {}