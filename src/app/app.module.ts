import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GlobalErrorHandler } from '../models/error/global-error.handler';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AuthGuardService } from './services/authguard.service';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
    providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }, AuthGuardService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {}
