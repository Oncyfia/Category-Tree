import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecursiveTreeComponent } from './recursive-tree.component';

@NgModule({
  declarations: [RecursiveTreeComponent],
  imports: [CommonModule],
  exports: [RecursiveTreeComponent],
})
export class RecursiveTreeModule {}
