import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { KhutbahViewPage } from './khutbah-view.page';

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
  declarations: [KhutbahViewPage]
})
export class KhutbahViewModule { }
