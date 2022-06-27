import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatabasePage } from './tab1.page';
import { UserService } from '../APIs';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: DatabasePage }])
  ],
  declarations: [DatabasePage],
  providers:[UserService]
})
export class DatabasePageModule {}
