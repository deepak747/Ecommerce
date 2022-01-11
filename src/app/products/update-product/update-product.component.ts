import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productID=0;
  //productDetails={}; 
  productDetails:any;

  constructor(private activatedroute:ActivatedRoute,
           private productService:ProductService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data=>{
      this.productID=data['id']

      
       this.productService.viewProduct1(this.productID).subscribe(productData=>{
         this.productDetails=productData;
        console.log("Updated product service detail is:",this.productDetails);
       })
    })
  }

  updateProduct(form: any){
    console.log("Updated form method value is:",form.value);
    let updateProduct={
      id:form.value.id,
      productName:form.value.productName,
      //catagory_id:form.value.product_catagory,
      description:form.value.description,
      price:form.value.price,
    };
            console.log("updateProduct value is",updateProduct);
      this.productService.updateProduct(this.productID,updateProduct).subscribe(data=>{
        console.log("finaly data should be updated",data)
      });
  }

}
