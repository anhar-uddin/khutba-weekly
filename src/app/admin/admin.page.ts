import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../providers/firebase-service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: 'admin.page.html',
  styleUrls: ['admin.page.scss'],
})
export class AdminPage implements OnInit {

  private khutbahSermonsCollection: AngularFirestoreCollection<any>;
  khutbahSermons: Observable<any>;

  constructor(
    public fs: FirebaseService,
    private readonly afs: AngularFirestore,
  ) { }
  ngOnInit() {
    // this.fs.addKhuthbah();
    this.khutbahSermonsCollection = this.afs.collection<any>('khutba-sermons');
    this.khutbahSermons = this.khutbahSermonsCollection.valueChanges();
    this.khutbahSermons.subscribe(res => {
      console.log('res', res);
    });
  }

}
