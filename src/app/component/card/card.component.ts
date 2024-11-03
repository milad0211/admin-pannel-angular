import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "../../develop/admin/products/products.component";

@Component({
  templateUrl: 'card.component.html',
  standalone: true,
  imports: [RouterOutlet, ProductsComponent],
})
export class CardsComponent {}
