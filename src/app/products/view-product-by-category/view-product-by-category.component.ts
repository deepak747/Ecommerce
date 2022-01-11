import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
  searchCategory: any;
  productList: any;
  user: any;
  productID = 0;
  categoryID=0
  proData: any;
  catData:any;
  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.viewProduct().subscribe((data: any) => {
      this.productList = data;
    })

    // this.activatedRoute.queryParams.subscribe(data=>{
    //   this.searchCategory=data['id'];
          
         //this two lines are comment
    //this.searchCategory = this.activatedRoute.snapshot.paramMap.get('id')
   // console.log("value and id of the search category is:", this.searchCategory)
  
  
    // this.productService.searchCategoryProduct(this.searchCategory).subscribe(products => {
    //   this.productList = products;
    //   console.log("Value of the product list is:",this.productList);
    // })
    // })

    // its a  old configiration 

    this.activatedRoute.params.subscribe(data => {
      this.productID = data['id'];
       console.log('productID is',this.productID);
    })

    // this.activatedRoute.params.subscribe(data => {
    //   this.categoryID = data['catId'];
    //    console.log('categoryID is',this.categoryID);
    // })
    
    this.productService.viewProduct1(this.productID).subscribe(viewData => {
      this.proData = viewData;
      console.log("In product case",this.proData);
    })

    // this.productService.searchCategProduct(this.categoryID).subscribe(viewData => {
    //   this.catData = viewData;
    //   console.log("In category case",this.catData);
    // })
  }   
}

