import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';


@NgModule({
    imports:[
        CommonModule,
        RouterModule,
        LoginRoutes,
        ReactiveFormsModule
    ],
    providers:[
    
    ],
    declarations:[ LoginComponent,
        AuthenticationComponent,RegisterComponent,
        // HeaderComponent
    ]
})

export class LoginModule { }