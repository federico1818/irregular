import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { VerbComponent } from './pages/verb/verb.component'

const routes: Routes = [
    {
        path: '',
        component: VerbComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VerbRoutingModule { }
