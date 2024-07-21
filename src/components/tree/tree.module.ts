import { NgModule } from '@angular/core';
import { TreeComponent } from './tree.component';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [TreeComponent],
  imports: [CommonModule, ScrollingModule],
  exports: [TreeComponent],
})
export class TreeModule {}
