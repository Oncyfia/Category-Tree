import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryTreeComponent } from './category-tree.component';

@NgModule({
  declarations: [CategoryTreeComponent],
  imports: [CommonModule],
  exports: [CategoryTreeComponent],
})
export class CategoryTreeModule {}
