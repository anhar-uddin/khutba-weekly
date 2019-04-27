import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-sermon-view',
  templateUrl: 'sermon-view.component.html',
  styleUrls: ['sermon-view.component.scss']
})
export class SermonViewComponent implements OnInit {
  @Input() khutbah: any[];
  @Input() sectionActive: Boolean = false;

  ngOnInit() {
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll(event) {
  //   console.log('efnhekj');
  //   const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  //   const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  //   const scrolled = (winScroll / height) * 100;
  //   document.getElementById('myBar').style.width = scrolled + '%';
  // }
}
