import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-div',
  templateUrl: './custom-div.component.html',
  styleUrls: ['./custom-div.component.scss']
})
export class CustomDivComponent implements OnInit {
  
  toggle = true;
  defaultTxt = "this is the default text ";
  customTxt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas ultricies mi eget. Elementum integer enim neque volutpat ac. Sit amet justo donec enim diam vulputate ut. Justo nec ultrices dui sapien. Erat pellentesque adipiscing commodo elit. Sed velit dignissim sodales ut eu sem integer vitae. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Sed felis eget velit aliquet sagittis id consectetur purus. Tempor orci dapibus ultrices in iaculis nunc.";

  
  events = [
    {id:1,"toggle":true,"status": this.defaultTxt},
    
  ];

  

  loadCustomTxt(button) {
    button.toggle = !button.toggle;
    button.status = button.toggle ? this.defaultTxt : this.customTxt;
 } 

  constructor() { }

  ngOnInit() {
  }

}
