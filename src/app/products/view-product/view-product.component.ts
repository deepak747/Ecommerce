import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

 import{Product} from '../product'
 import{ProductService} from '../product.service'

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productID=0;
  //productData:any;
  productList: any;
  proviewData:any;
  constructor(private activatedRoute:ActivatedRoute,
               private productService:ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID=data['id'];
    })

    this.productService.viewProduct1(this.productID).subscribe(viewData=>{
          this.proviewData=viewData;
          console.log("its a view product",this.proviewData);
   
    })
  }

}
