import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService,
               private route:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
  }
  AddNewProduct(form:any)
  {
    console.log(form.value);

        let newProduct={
          id:form.value.product_id,
          productName:form.value.product_Name,
          //catagory_id:form.value.product_catagory,
          description:form.value.description,
          price:form.value.price,
        };
          console.log("Value of the newProduct is",newProduct);
          this.productService.createProduct(newProduct).subscribe(data=>{
               console.log("Data is",data);
          })
          this.route.navigate(['/products'])
  }
  Success()
  { 
    this.toaster.success('success');
  }
}
