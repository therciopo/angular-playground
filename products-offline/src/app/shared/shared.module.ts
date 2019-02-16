import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StarComponent, HeaderComponent],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    HeaderComponent
  ]
})
export class SharedModule { }
