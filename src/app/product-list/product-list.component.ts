import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';

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

  constructor(private http:HttpClient,private data: DataService) { 

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
    this.getAfterFilterProductList(()=>{
      if(value>1){
        this.productList= this.productList.filter(data=>{
          return data.category==value;
        });
        console.log('after Filter***',this.productList)
       }
    });
     
  }
  getAfterFilterProductList(callback){
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
         callback();
         console.log(this.productList);
    },
    err=>{

    })
  }


  addCart(item){
    if(!this.cartItems.includes(item))
    this.cartItems.push(item);
    console.log(this.cartItems);
    localStorage.setItem('cartItems',JSON.stringify(this.cartItems))
    this.data.changeCount(this.cartItems.length)
  }

  

}
