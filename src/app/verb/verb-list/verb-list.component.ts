import { Component, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { MatTableDataSource } from '@angular/material/table'

import { map } from 'rxjs/operators'
import { Verb } from '../verb'
import { Tense } from '../tense'

@Component({
    selector: 'app-verb-list',
    templateUrl: './verb-list.component.html',
    styleUrls: ['./verb-list.component.scss']
})

export class VerbListComponent implements OnInit {
    public dataSource: MatTableDataSource<Verb> = new MatTableDataSource<Verb>()

    constructor(
        private afs: AngularFirestore
    ) {}

    ngOnInit(): void {
        this.afs.collection('verbs').valueChanges()
        .pipe(
            map(verbs => { 
                return verbs.map(verb => {
                    return Object.assign(new Verb, {
                        infinitive: Object.assign(new Tense, verb['infinitive']),
                        simple_past: Object.assign(new Tense, verb['simple_past']),
                        past_participle: Object.assign(new Tense, verb['past_participle'])
                    })
                })
            })
        ).subscribe(res => {
            this.dataSource.data = res
        })
        this.dataSource.filterPredicate = (data: Verb, filter: string) => {
            const value = data.infinitive.text.trim().toLocaleLowerCase() +
                          data.past_participle.text.trim().toLocaleLowerCase() + 
                          data.simple_past.text.trim().toLocaleLowerCase()
            return value.includes(filter)
        }
    }
    
    public filter(event: Event): void {
        const value = (event.target as HTMLInputElement).value
        this.dataSource.filter = value.trim().toLowerCase()
    }

}
