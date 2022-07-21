import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, LoginRouting],
    exports: [],
    providers: []
})
export class LoginModule {}
