import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


productList:any[]=[]
productList1:any[]=[]
cartItems:any[]=[];
searchText:any;

  constructor(private http:HttpClient, private router: Router,) { 

  }

  ngOnInit(): void {
   this.getProductList();
  }
  getProductList(){
    this.http.get('http://139.59.6.161:3001/users/listProducts').subscribe(response=>{
         console.log('ProductResponse',response)
         let list=response['data'].map((data,index)=>{
      if(index==0){
      var data= data.kids.map(data=>{
          data['category']=4;
          return data;
        })
      }
      else if(index==1){
        var data= data.womens.map(data=>{
          data['category']=3;
          return data;
        })
      }
      else if(index==2){
        var data= data.mens.map(data=>{
          data['category']=2;
          return data;
        })
      }
      return data;

         });
         console.log(list);
         this.productList=[...list[0],...list[1],...list[2]]
         console.log(this.productList);
    },
    err=>{

    })
  }

  categoryFilter(value){
     this.getProductList();
     console.log('filter',value);
     if(value>1){
      this.productList= this.productList.filter(data=>{
        return data.category==value;
      });
     }
  }

  addCart(item){
    if(!this.cartItems.includes(item))
    this.cartItems.push(item);
    console.log(this.cartItems);
    environment
    .swalalert("success", "Added to cart")
    .then((value) => {
      if (value) {
       // this.router.navigate(["teachers"]);
      }
    });
    localStorage.setItem('cartItems',JSON.stringify(this.cartItems)
    )
    
  }

  

}
