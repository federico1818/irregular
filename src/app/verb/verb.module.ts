import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MaterialModule } from './../material/material.module'

import { VerbRoutingModule } from './verb-routing.module'
import { VerbComponent } from './pages/verb/verb.component'
import { VerbListComponent } from './components/verb-list/verb-list.component'


@NgModule({
    declarations: [
        VerbComponent,
        VerbListComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        VerbRoutingModule
    ]
})

export class VerbModule { }
