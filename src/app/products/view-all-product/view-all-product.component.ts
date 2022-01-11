import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

   productList:any;
 

  constructor(private productService:ProductService,private router:Router) { 
  }

  ngOnInit(): void {
      //reload
      // if (!localStorage.getItem('firstReload') || localStorage.getItem('firstReload') == 'true') {
      //   localStorage.setItem('firstReload', 'false');
      //   window.location.reload();
      // } else {
      //   localStorage.setItem('firstReload', 'true');
      // }



   this.productService.viewProduct().subscribe(data=>{
      this.productList=data;
   }) 
  }
  
  
  

}
