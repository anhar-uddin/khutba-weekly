import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FirebaseService } from '../providers/firebase-service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../buttons-popover/buttons-popover';

@Component({
  selector: 'app-khutbah-view',
  templateUrl: 'khutbah-view.page.html',
  styleUrls: ['khutbah-view.page.scss']
})
export class KhutbahViewPage implements OnInit {
  defaultHref = '';
  private khutbahSermonsCollection: AngularFirestoreCollection<any>;
  khutbahSermons: Observable<any>;
  activeSection = 'arabic1';
  @ViewChild('mainContainer') mainContainer: ElementRef;
  // @ViewChild('arabic1') arabic1: ElementRef;
  // @ViewChild('arabic1Btn') arabic1Btn: ElementRef;
  // @ViewChild('point1') point1: ElementRef;
  // @ViewChild('point1Btn') point1Btn: ElementRef;
  // @ViewChild('point2') point2: ElementRef;
  // @ViewChild('point2Btn') point2Btn: ElementRef;
  @ViewChild('khutbahHeader') khutbahHeader: ElementRef;
  @ViewChild('headerBtnsSection') headerBtnsSection: ElementRef;

  constructor(
    public fs: FirebaseService,
    private readonly afs: AngularFirestore,
    public popoverController: PopoverController
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
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + '%';
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      event: ev,
      translucent: true
    });
    popover.onDidDismiss().then(data => {
      console.log('data', data);
    });
    return await popover.present();
  }

  onPageScroll(e) {
    const winScroll = e.detail.scrollTop;
    const height = (this.mainContainer.nativeElement.offsetHeight - e.target.scrollHeight) + 100;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + '%';
    // if (this.point2.nativeElement.getBoundingClientRect().top < 196) {
    //   this.activeSection = 'point2';
    //   return;
    // } else if (this.point1.nativeElement.getBoundingClientRect().top < 196) {
    //   this.activeSection = 'point1';
    //   return;
    // } else if (this.arabic1.nativeElement.getBoundingClientRect().top < 196) {
    //   this.activeSection = 'arabic1';
    //   return;
    // }
  }

  scrollTo(el) {
    el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
