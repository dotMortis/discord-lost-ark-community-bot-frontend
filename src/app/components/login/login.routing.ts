import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const LOGIN_ROUTES: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

export const LoginRouting = RouterModule.forChild(LOGIN_ROUTES);
