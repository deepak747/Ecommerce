import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/products/product.service';
import { Category } from '../category';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categoryList: any
  categoryID = 0;
  proData: any;
  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.productService.getCategory().subscribe(categorydata => {
      this.categoryList = categorydata;
    })

      this.activatedRoute.params.subscribe(data => {
      this.categoryID = data['id'];
      console.log("Category ID is:", this.categoryID);

    })

  }
             
  cart() {
    alert("Go to product component")
           //   this.moduleFunction()
         }
}
