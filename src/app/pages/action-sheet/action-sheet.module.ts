import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ActionSheetComponent } from './action-sheet.component';
import { HomeInputComponent } from './home-input/home-input.component';
import { UserService } from './home-input/user.service';
import { UsersService } from './home-input/users.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ActionSheetComponent
      }
    ])
  ],
  declarations: [
    ActionSheetComponent,
    HomeInputComponent
  ],
  providers: [UserService, UsersService]
})
export class ActionSheetModule {}