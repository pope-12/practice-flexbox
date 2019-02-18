import { NgModule } from '@angular/core';
import { FlexboxComponent } from './flexbox.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FlexboxComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FlexboxComponent]
})
export class FlexboxModule { }
