import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { Observable } from 'rxjs';
import { Definition } from '../models/definition';

@Injectable({
    providedIn: 'root',
})
export class DefinitionService {
    constructor(private firestore: AngularFirestore) {}

    getDefinitions(): Observable<Definition[]> {
        return this.firestore.collection<Definition>('definition').valueChanges();
    }
}
