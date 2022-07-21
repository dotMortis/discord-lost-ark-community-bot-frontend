import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../services/global/auth.service';
import { UnsubscribeComponent } from '../common/unsubscribe.component';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends UnsubscribeComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(private _authService: AuthService, private _fb: FormBuilder) {
        super();

        this.loginForm = this._fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        this.addSub(
            forkJoin({
                isAuthenticated: this._authService.isAuthenticated()
            })
        );
    }

    onLogin(): void {
        console.log('onLogin');

        const { username, password }: { username: string; password: string } = this.loginForm.value;
        this._authService
            .login(username, password)
            .pipe(tap(r => console.log(r)))
            .subscribe();
    }
}
