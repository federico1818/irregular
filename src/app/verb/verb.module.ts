import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { VerbListComponent } from './verb-list/verb-list.component'


@NgModule({
    declarations: [
        VerbListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        VerbListComponent
    ]
})

export class VerbModule { }
