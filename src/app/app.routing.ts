import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('src/app/components/login/login.module').then(m => m.LoginModule)
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
