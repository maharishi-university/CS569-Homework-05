import { Component, OnInit, Output } from '@angular/core';
import { strict } from 'assert';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'buttons',
  template: `
   <button (click)='rockevent()'>{{this.labels.label1}}</button>
   <button (click)='paperevent()'>{{this.labels.label2}}</button>
   <button (click)='scissorevent()'>{{this.labels.label3}}</button>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {
  labels:{label1:string,label2:string,label3:string}
  state:{won:number,
  lose:number,
 computer:string};
  choices:any
  @Output() rockEvent:EventEmitter<any>
  @Output() paperEvent:EventEmitter<any>
  @Output() scissorEvent:EventEmitter<any>
  constructor() { 
    this.state={won:0,lose:0,computer:''}
    this.labels={label1:'Rock',label2:'Paper',label3:'Scissor'}
    this.rockEvent=new EventEmitter();
    this.paperEvent=new EventEmitter();
    this.scissorEvent=new EventEmitter();
    this.choices=['Rock','Paper','Scissor']
  }
  

  ngOnInit(): void {
    console.log('ng onit')
    
  }
 rockevent(){
 console.log(this.labels.label1)
 let res=this.choices[Math.floor(Math.random()*this.choices.length)];
 console.log(res)
 if(this.labels.label1===res){
   this.state.won+=1
 }
 
   
 }
 paperevent(){

 }
 scissorevent(){

 }


}
