import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Router,Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  count=1;
  viewcartarray:any;
  subtotal;
  constructor(private http:HttpClient, private router: Router) { 

  }
  ngOnInit(): void {

    this.viewcartarray = JSON.parse(localStorage.getItem('cartItems'))
    this.viewcartarray.map(res=>{
     
      res.total=res.productprice;
   
      this.subtotal=this.viewcartarray.reduce((sum,data)=>{ return parseInt(sum)+parseInt(data.total) },0)
    })
console.log(this.viewcartarray);

  }
  countfun(id,data) { 
  console.log(id, data);
  this.viewcartarray.map(res=>{
    if(res.id==id){
    res.total=res.productprice*data;
  }
  console.log('total',res.total);
    this.subtotal=this.viewcartarray.reduce((sum,data)=>{ return parseInt(sum)+parseInt(data.total) },0)
  console.log('var',this.subtotal);
  
  })
  console.log(this.viewcartarray);



  }
delete(prodid){
  console.log(prodid);
  var elementPos = this.viewcartarray.map(function(x) {return x.id; }).indexOf(prodid);
  console.log(elementPos);
  this.viewcartarray.splice(elementPos,1);
  this.subtotal=this.viewcartarray.reduce((sum,data)=>{ return parseInt(sum)+parseInt(data.total) },0)
  JSON.stringify(localStorage.setItem('cartItems',JSON.stringify(this.viewcartarray)))
  environment
  .swalalert("success", "Deleted from cart")
  .then((value) => {
    if (value) {
     // this.router.navigate(["teachers"]);
    }
  });
}
checkout(){
 
localStorage.setItem('viewcartitem',JSON.stringify(this.viewcartarray)   )
  localStorage.setItem('viewcarttotal',JSON.stringify(this.subtotal  ) )
  environment
  .swalalert("success", "")
  this.router.navigateByUrl('address');
  // .then((value) => {
  //   // this.router.navigateByUrl('/address');
  //   if (value) {
  //     // this.router.navigateByUrl("address");
  //   }
  // });
}
}
