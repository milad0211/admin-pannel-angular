import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListType, CategoryResponse } from '../../models/products';
import { ProductService } from 'src/app/services/product/product.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<CategoryListType[]> | undefined;

  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.productSrv.getCategory().subscribe((res: CategoryResponse) => {
      this.categories$ = of(res.data); // تبدیل به Observable
    });
  }
}
