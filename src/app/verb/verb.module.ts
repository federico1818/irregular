import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { VerbListComponent } from './verb-list/verb-list.component'
import { MaterialModule } from './../material/material.module'


@NgModule({
    declarations: [
        VerbListComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        VerbListComponent
    ]
})

export class VerbModule { }
