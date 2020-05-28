import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-root',
  template:`
  
    <h1>Rock Paper Scissors</h1>
    <h2>Score:Won:{{this.state.won}}/lose:{{this.state.lose}}</h2>
   <button (click)='rockevent()'>{{this.labels.label1}}</button>
   <button (click)='paperevent()'>{{this.labels.label2}}</button>
   <button (click)='scissorevent()'>{{this.labels.label3}}</button>
    
    <h2>Computer choice was:{{this.state.computer}}</h2>
  `
})
export class AppComponent {
 labels:{label1:string,label2:string,label3:string}
  state:{won:number,
  lose:number,
 computer:string};
  choices:any
  // @output() rockEvent:EventEmitter<any>
  // @Output() paperEvent:EventEmitter<any>
  // @Output() scissorEvent:EventEmitter<any>
  constructor() { 
    this.state={won:0,lose:0,computer:''}
    this.labels={label1:'Rock',label2:'Paper',label3:'Scissor'}
    // this.rockEvent=new EventEmitter();
    // this.paperEvent=new EventEmitter();
    // this.scissorEvent=new EventEmitter();
    this.choices=['Rock','Paper','Scissor']
  }
  

  ngOnInit(): void {
    console.log('ng onit')
    
  }
  rockevent(){
 console.log(this.labels.label1)
 let res=this.choices[Math.floor(Math.random()*this.choices.length)];
 console.log(res)
 if(this.labels.label1==='Rock'&&res==='Rock'){
  //let copy= {...this.state,this.state.won:this.state+=1,this.state}
   this.state={...this.state,won:this.state.won+0,computer:res}
 }
 else if(this.labels.label1==='Rock'&&res==='Paper'){
  //let copy= {...this.state,this.state.won:this.state+=1,this.state}
   this.state={...this.state,lose:this.state.lose+1,computer:res}
 }
 else if(this.labels.label1==='Rock'&&res==='Scissor'){
  //let copy= {...this.state,this.state.won:this.state+=1,this.state}
   this.state={...this.state,lose:this.state.lose+1,computer:res}
 }
}
 ////////////////////////////////////////////////////////////////////
 paperevent(){
let res=this.choices[Math.floor(Math.random()*this.choices.length)];
 console.log(res)
 if(this.labels.label1==='Paper'&&res==='Rock'){
  //let copy= {...this.state,this.state.won:this.state+=1,this.state}
   this.state={...this.state,won:this.state.won+1,computer:res}
 }
 else if(this.labels.label1==='Paper'&&res==='Paper'){
  //let copy= {...this.state,this.state.won:this.state+=1,this.state}
   this.state={...this.state,won:this.state.won+0,computer:res}
 }
 else if(this.labels.label1==='Paper'&&res==='Scissor'){
  //let copy= {...this.state,this.state.won:this.state+=1,this.state}
   this.state={...this.state,lose:this.state.lose+1,computer:res}
 }
 }
 scissorevent(){
  let res=this.choices[Math.floor(Math.random()*this.choices.length)];
 console.log(res)
 if(this.labels.label3==='Scissor'&&res==='Rock'){
  //let copy= {...this.state,this.state.won:this.state+=1,this.state}
   this.state={...this.state,lose:this.state.lose+1,computer:res}
 }
 else if(this.labels.label1==='Scissor'&&res==='Paper'){
  //let copy= {...this.state,this.state.won:this.state+=1,this.state}
   this.state={...this.state,won:this.state.won+1,computer:res}
 }
 else if(this.labels.label1==='Scissor'&&res==='Scissor'){
  //let copy= {...this.state,this.state.won:this.state+=1,this.state}
   this.state={...this.state,won:this.state.won+0,computer:res}
 }
 }
}