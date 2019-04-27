import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { KhutbahViewPage } from './khutbah-view.page';
import { SermonViewComponent } from './sub-components/sermon-view/sermon-view.component';
import { PopoverPage } from '../buttons-popover/buttons-popover';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: KhutbahViewPage
      }
    ])
  ],
  entryComponents: [PopoverPage],
  declarations: [KhutbahViewPage, SermonViewComponent, PopoverPage]
})
export class KhutbahViewModule { }
