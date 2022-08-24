import {Injectable} from '@angular/core';
import {Item} from "../models/item";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import firebase from "firebase/compat";
import {ItemsComponent} from "../components/items/items.component";
import {doc, setDoc} from "@angular/fire/firestore";
import {ActivatedRoute, Router} from "@angular/router";
import {linkWithCredential, user} from "@angular/fire/auth";
import {AuthService} from "./auth.service";


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

    getApplications(email: string | null): AngularFirestoreCollection<Item> {
        // @ts-ignore
        this.applicationsCollection = this.afs.collection('users').doc(email).collection(this.dbPath);
        return this.applicationsCollection;
    }

    getSingleApp(id: string, email: string): Observable<Item> | undefined {
        this.applicationDoc = this.afs.doc<Item>(`users/${email}/Applications/${id}`);
        this.app = this.applicationDoc.snapshotChanges().pipe(map(action => {
            // @ts-ignore
            const data = action.payload.data() as Item;
            // @ts-ignore
            data.id = action.payload.id;
            return data;
        }));
        return this.app
    }


    newApplication(apps: Item, email: string | null): any {
        apps.applicationStatus = 'Pending'
        // @ts-ignore
        this.applicationsCollection = this.afs.collection('users').doc(email).collection(this.dbPath);
        this.applicationsCollection.add({...apps});

    }

    updateApplication(id: string, data: any, email: string | null): Promise<void> {
        // @ts-ignore
        this.applicationsCollection = this.afs.collection('users').doc(email).collection(this.dbPath);
        return this.applicationsCollection.doc(id).update(data);
    }

    deleteApplication(id: string, email: string | null): Promise<void> {
        // @ts-ignore
        this.applicationsCollection = this.afs.collection('users').doc(email).collection(this.dbPath);
        return this.applicationsCollection.doc(id).delete();
    }

}
