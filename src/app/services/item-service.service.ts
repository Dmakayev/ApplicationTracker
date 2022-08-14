import {Injectable} from '@angular/core';
import {Item} from "../models/item";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {map, Observable} from "rxjs";
import firebase from "firebase/compat";
import {ItemsComponent} from "../components/items/items.component";
import {doc, setDoc} from "@angular/fire/firestore";


@Injectable()

export class ItemServiceService {
    applicationsCollection: AngularFirestoreCollection<Item>;
    // @ts-ignore
    applicationsDoc: AngularFirestoreDocument<Item>;
    apps: Observable<Item[]> | undefined;
    app: Observable<Item> | undefined;

    constructor( private afs: AngularFirestore) {
        this.applicationsCollection = this.afs.collection('Applications',
                ref => ref.orderBy('companyName', 'asc'));
    }

    getApplications(): Observable<Item[]> {
        this.apps = this.applicationsCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data() as Item;
                data.id = action.payload.doc.id;
                return data;
            })
        }))
        return this.apps
    }

    newApplication(apps:Item){
        apps.applicationStatus = 'Pending'
        this.applicationsCollection.add(apps);

    }

    updateApplication(apps:Item){
        const bookDocRef = doc(this.afs.firestore, `Applications/${apps.id}`);
        return setDoc(bookDocRef, apps)

    }
}
