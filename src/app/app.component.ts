import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryTreeModule } from './category-tree/category-tree.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CategoryTreeModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
