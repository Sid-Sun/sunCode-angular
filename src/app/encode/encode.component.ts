import { Component, OnInit } from '@angular/core';
declare var $:any;
declare function encodingFunction(): any;

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css']
})
export class EncodeComponent implements OnInit {
  addOutDiv = false;
  outputSunCode = '';
  constructor() { }

  ngOnInit() {
  }
  addOutputDiv() {
    if ($('#messageInput').val() !== '') {
      this.outputSunCode = encodingFunction();
      this.addOutDiv = true;
      console.log(this.outputSunCode);
    }
  }
 }
