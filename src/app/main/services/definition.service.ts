import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { Definition } from '../models/definition';

@Injectable()
export class DefinitionService {
    private definitions$ = new BehaviorSubject<Definition[]>(null);

    constructor(private firestore: AngularFirestore) {}

    fetchDefinitions(): Observable<Definition[]> {
        return this.firestore
            .collection<Definition>('definitions')
            .valueChanges()
            .pipe(take(1))
            .pipe(tap(definitions => this.setDefinitions(definitions)));
    }

    getDefinitions(): Observable<Definition[]> {
        return this.definitions$ as Observable<Definition[]>;
    }

    setDefinitions(definitions: Definition[]) {
        this.definitions$.next(definitions);
    }

    getRandomDefinition() {
        const definitions = this.definitions$.value;
        const randomIndex = Math.floor(Math.random() * Math.floor(definitions.length));
        return definitions[randomIndex];
    }
}
