import {Injectable} from '@angular/core';
import {Item} from "../models/item";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import firebase from "firebase/compat";
import {ItemsComponent} from "../components/items/items.component";
import {doc, setDoc} from "@angular/fire/firestore";


@Injectable({
    providedIn: 'root'
})

export class ItemServiceService {
    private dbPath = '/Applications';
    applicationsCollection: AngularFirestoreCollection<Item>;
    applicationDoc: AngularFirestoreDocument<Item> | undefined;
    apps: Observable<Item[]> | undefined;
    app: Observable<Item> | undefined;

    constructor(private afs: AngularFirestore) {
        this.applicationsCollection = afs.collection(this.dbPath);
    }

    getApplications(): AngularFirestoreCollection<Item> {
        return this.applicationsCollection;
    }

    getSingleApp(id: string): Observable<Item> | undefined {
        this.applicationDoc = this.afs.doc<Item>(`Applications/${id}`);
        this.app = this.applicationDoc.snapshotChanges().pipe(map(action => {
            // @ts-ignore
            const data = action.payload.data() as Item;
            // @ts-ignore
            data.id = action.payload.id;
            return data;
        }));
        return this.app
    }


    newApplication(apps: Item): any {
        apps.applicationStatus = 'Pending'
        this.applicationsCollection.add({...apps});

    }

    updateApplication(id: string, data: any): Promise<void> {
        return this.applicationsCollection.doc(id).update(data);
    }

    deleteApplication(id: string): Promise<void> {
        return this.applicationsCollection.doc(id).delete();
    }

}
