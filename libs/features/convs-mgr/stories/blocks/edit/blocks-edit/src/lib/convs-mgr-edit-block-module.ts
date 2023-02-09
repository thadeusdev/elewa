import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OpenEndedQuestionEditComponent } from './components/open-ended-question-edit/open-ended-question-edit.component';
import { MessageBlockEditComponent } from './components/message-block-edit/message-block-edit.component';
import { EmailBlockEditComponent } from './components/email-block-edit/email-block-edit.component';
import { PhoneBlockEditComponent } from './components/phone-block-edit/phone-block-edit.component';
import { NameBlockEditComponent } from './components/name-block-edit/name-block-edit.component';
import { DefaultComponent } from './components/default/default.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],

  declarations: [
    OpenEndedQuestionEditComponent,
    MessageBlockEditComponent,
    NameBlockEditComponent,
    EmailBlockEditComponent,
    PhoneBlockEditComponent,
    DefaultComponent,
  ],
})
export class ConvsMgrEditBlockModule {}
