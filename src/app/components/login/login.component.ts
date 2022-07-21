import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AuthService } from '../../services/global/auth.service';
import { UnsubscribeComponent } from '../common/unsubscribe.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends UnsubscribeComponent implements OnInit {
    constructor(private authService: AuthService) {
        super();
    }

    ngOnInit(): void {
        this.addSub(
            forkJoin({
                isAuthenticated: this.authService.isAuthenticated()
            })
        );
    }
}
