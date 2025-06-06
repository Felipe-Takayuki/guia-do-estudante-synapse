import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: "register", component: RegisterComponent
    },
    {
        path: "", component: LoginComponent
    },
    {
        path: "home", component: HomeComponent
    }
];
