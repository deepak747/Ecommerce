import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import {Product} from './product'
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient,private toastr: ToastrService) { }

     createProduct(productBody: any):Observable<Product>{
       const baseurl="http://localhost:3000/product/";
       return this.httpClient.post<Product>(baseurl,productBody)
      }
     
      viewProduct():Observable<Product>{
        const baseurl="http://localhost:3000/product/";
        return this.httpClient.get<Product>(baseurl)
       }

      //  viewProduct1(productId: any):Observable<Product>{
      //   const baseurl="http://localhost:3000/product/"+productId;
      //   return this.httpClient.get<Product>(baseurl)
      //  }

      viewProduct1(productId: any):Observable<Product>{
        const baseurl="http://localhost:3000/product/"+productId;
        return this.httpClient.get<Product>(baseurl)
       }


       updateProduct(productId: any,productBody: any):Observable<Product>{
        const baseurl="http://localhost:3000/product/"+productId;
        return this.httpClient.put<Product>(baseurl,productBody)
       }

       deleteProduct(productId: any):Observable<Product>{
        const baseurl="http://localhost:3000/product/"+productId;
        return this.httpClient.delete<Product>(baseurl)
       }

       searchCategProduct(categoryID: any):Observable<Product>{
        const baseurl="http://localhost:3000/cetegories/"+categoryID;
         console.log("Search category by product serivise is called and id is",categoryID)
        return this.httpClient.get<Product>(baseurl)
       }

      searchCategoryProduct(id: any):Observable<Product>{
        const baseurl="http://localhost:3000/product?product/"+id;
        return this.httpClient.get<Product>(baseurl)
       }

       searchDateProduct(dateParam: any):Observable<Product>{
        const baseurl="http://localhost:3000/product/date="+dateParam;
        return this.httpClient.get<Product>(baseurl)
       }

        getCategory(){
          const categoryUrl="http://localhost:3000/cetegories"
          return this.httpClient.get<Category>(categoryUrl)
        }

           

        showSuccess()
        {
          //  this.toastr.showSuccess()
        // {
        //   this.toastr.success(message, title)
        // }
        }

        
}
