import { Component, OnInit, HostListener } from '@angular/core';
import { FirebaseService } from '../providers/firebase-service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-khutbah-view',
  templateUrl: 'khutbah-view.page.html',
  styleUrls: ['khutbah-view.page.scss']
})
export class KhutbahViewPage implements OnInit {
  defaultHref = '';
  private khutbahSermonsCollection: AngularFirestoreCollection<any>;
  khutbahSermons: Observable<any>;

  constructor(
    public fs: FirebaseService,
    private readonly afs: AngularFirestore
  ) { }
  ngOnInit() {
    // this.fs.addKhuthbah();
    this.khutbahSermonsCollection = this.afs.collection<any>('khutba-sermons', ref => ref.where('active', '==', true));
    this.khutbahSermons = this.khutbahSermonsCollection.valueChanges();
    this.khutbahSermons.subscribe(res => {
      console.log('res', res);

    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('efnhekj');
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + '%';
  }

  onPageScroll(e) {
    console.log(e);
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
