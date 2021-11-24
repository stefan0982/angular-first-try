import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { UsersModule } from "./users/users.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HighlightDirective } from './directives/highlight.directive';
import { HideDirective } from './directives/hide.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule( {
    declarations: [
        AppComponent,
        HighlightDirective,
        HideDirective,
        UnlessDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        UsersModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        HighlightDirective
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
