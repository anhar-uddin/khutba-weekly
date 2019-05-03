
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    constructor(
        public afs: AngularFirestore
    ) { }

    addUser(value) {
        return new Promise<any>((resolve, reject) => {
            this.afs.collection('/users').add({
                name: value
            })
                .then(
                    (res) => {
                        resolve(res);
                    },
                    err => reject(err)
                );
        });
    }

    addKhuthbah() {
        return new Promise<any>((resolve, reject) => {
            this.afs.collection('/khutba-sermons').add({
                active: true,
                title: 'seco khutbah',
                duration: '10mins',
                date: '10/10/2019',
                description: 'rfhrfhr',
                khutbah_scripts: [{
                    id: 'arabic_1',
                    title: 'Arabic 1',
                    khutbah: [{
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states',
                        type: 'arabic'
                    }, {
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'card'
                    },
                    {
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'card'
                    },
                    {
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'card'
                    },
                    {
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'card'
                    }]
                }, {
                    id: 'point_1',
                    title: 'Point 1',
                    khutbah: [{
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states',
                        type: 'card'
                    }, {
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'arabic'
                    },
                    {
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'card'
                    },
                    {
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'card'
                    },
                    {
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'card'
                    }]
                }, {
                    id: 'point_2',
                    title: 'Point 2',
                    khutbah: [{
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states',
                        type: 'card'
                    }, {
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'arabic'
                    },
                    {
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'card'
                    },
                    {
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'card'
                    },
                    {
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'card'
                    }]
                }]
            })
                .then(
                    (res) => {
                        resolve(res);
                    },
                    err => reject(err)
                );
        });
    }
}
