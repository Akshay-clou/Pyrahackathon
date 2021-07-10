import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hackathonTask';

  constructor(){

  }
  ngOnInit() {


    $(".nav .nav-link").on("click", function(){
      $(".nav").find(".active").removeClass("active");
      $(this).addClass("active");
   });
   
  }
}
