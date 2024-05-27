import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoryTreeComponent } from './category-tree.component';
import { RecursiveTreeModule } from './recursive-tree/recursive-tree.module';

@NgModule({
  declarations: [CategoryTreeComponent],
  imports: [CommonModule, RecursiveTreeModule],
  exports: [CategoryTreeComponent],
})
export class CategoryTreeModule {}
