import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatTableModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [
        MatToolbarModule,
        MatTableModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule
    ]
})

export class MaterialModule { }
