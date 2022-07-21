import { Component, OnInit } from '@angular/core';
import { UnsubscribeComponent } from './components/common/unsubscribe.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent extends UnsubscribeComponent implements OnInit {
    constructor() {
        super();
    }

    ngOnInit(): void {
        return;
    }
}
