import { Injectable, OnDestroy } from '@angular/core';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './global/auth.service';
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, OnDestroy {
    private _subs: Subscription[];

    constructor(
        public auth: AuthService,
        public router: Router,
        public activatedRoute: ActivatedRoute
    ) {
        this._subs = new Array<Subscription>();
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.auth.isAuthenticated().pipe(
            tap((result: boolean) => {
                if (result === false) this._gotoLogin();
            })
        );
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true;
    }

    private _gotoLogin(): Promise<boolean> {
        return this.router.navigate(['login']);
    }

    ngOnDestroy(): void {
        this._subs.forEach((sub: Subscription) => sub.unsubscribe());
    }
}
