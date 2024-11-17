import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { IProduct } from './models/product';
import { ProductService } from './services/product.service';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    HttpClient
  ],
  imports: [RouterOutlet, CommonModule, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent implements OnInit {

  title = 'Angular App';
  products: IProduct[] = []

  constructor(private ProductService: ProductService) {
    
    this.ProductService.getAll().subscribe(
      (products:IProduct[]) => { this.products = products })
  }
  ngOnInit(): void {
      
  }
}
