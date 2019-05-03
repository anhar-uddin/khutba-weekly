import { Component, OnInit, Input, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sermon-view',
  templateUrl: 'sermon-view.component.html',
  styleUrls: ['sermon-view.component.scss']
})
export class SermonViewComponent implements OnInit {
  @Input() title;
  @Input() id;
  @Input() khutbah: any[];
  @Input() sectionActive: Boolean = false;
  ngOnInit() {
  }
}
