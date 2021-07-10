import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hackathonTask';
  count: number;
  constructor(private data: DataService){

  }
  ngOnInit() {


    
   
    this.data.currentCartCount.subscribe(count => {
      console.log('countinheader',count);
     this.count = count
   })
  

  
  }
  reset(){
    this.count=0
  }
}
