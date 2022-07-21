import { Component, OnDestroy } from '@angular/core';
import { Observable, PartialObserver, Subscription } from 'rxjs';

@Component({ template: '' })
export abstract class UnsubscribeComponent implements OnDestroy {
    private _subscriptions: Subscription[];
    constructor() {
        this._subscriptions = new Array<Subscription>();
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach((subscription: Subscription) => {
            subscription.unsubscribe();
        });
    }

    addSub(val: Observable<any>, optionsSubscription?: PartialObserver<any>): Subscription {
        const sub = val.subscribe(optionsSubscription);
        this._subscriptions.push(sub);
        return sub;
    }
}