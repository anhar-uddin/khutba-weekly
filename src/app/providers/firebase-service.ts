
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
                title: 'first khutbah',
                duration: '10mins',
                date: '10/10/2019',
                description: 'rfhrfhr',
                khutbah: {
                    arabic_1: [{
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
                    }],
                    point_1: [{
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'arabic'
                    }, {
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'card'
                    }], point_2: [{
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'arabic'
                    }, {
                        // tslint:disable-next-line:max-line-length
                        text: 'When you need a list of data but also want to keep around metadata. Metadata provides you the underyling DocumentReference, document id, and array index of the single document. Having the documents id around makes it easier to use data manipulation method gives you more horsepower with other Angular integrations such as ngrx, forms, and animations due to the type property.The type property on each DocumentChangeAction is useful for ngrx reducers, form states, and animation states', type: 'card'
                    }], point_3: [{
                        text: 'fjhrkhfk',
                        type: 'arabic'
                    }, {
                        text: 'fjhrkhfk',
                        type: 'card'
                    }]
                    , arabic_2: [{
                        text: 'fjhrkhfk',
                        type: 'arabic'
                    }, {
                        text: 'fjhrkhfk',
                        type: 'card'
                    }], action_1: [{
                        text: 'fjhrkhfk',
                        type: 'arabic'
                    }, {
                        text: 'fjhrkhfk',
                        type: 'card'
                    }], action_2: [{
                        text: 'fjhrkhfk',
                        type: 'arabic'
                    }, {
                        text: 'fjhrkhfk',
                        type: 'card'
                    }], action_3: [{
                        text: 'fjhrkhfk',
                        type: 'arabic'
                    }, {
                        text: 'fjhrkhfk',
                        type: 'card'
                    }]
                }
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
