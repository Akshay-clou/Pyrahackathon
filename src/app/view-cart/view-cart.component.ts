import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  count=1;
  viewcartarray:any;
  subtotal;
  constructor() { }

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
  JSON.stringify(localStorage.setItem('cartItems',JSON.stringify(this.viewcartarray)))

}
checkout(){
localStorage.setItem('viewcartitem',JSON.stringify(this.viewcartarray)   )
  localStorage.setItem('viewcarttotal',JSON.stringify(this.subtotal  ) )
}
}
