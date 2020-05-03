import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

@Component({
    selector: 'app-verb-list',
    templateUrl: './verb-list.component.html',
    styleUrls: ['./verb-list.component.scss']
})

export class VerbListComponent implements OnInit {
    public verbs: Observable<any[]>

    constructor(
        private afs: AngularFirestore
    ) {}

    ngOnInit(): void {
        this.verbs = this.afs.collection('verbs').valueChanges()
    }

}
