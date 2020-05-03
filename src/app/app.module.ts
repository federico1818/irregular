import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { AngularFireModule } from '@angular/fire'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { MaterialModule } from './material/material.module'
import { VerbModule } from './verb/verb.module'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        MaterialModule,
        VerbModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
