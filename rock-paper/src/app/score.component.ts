import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'score',
  template: `
   <h2>score: won/lost</h2>
  `,
  styles: [
  ]
})
export class ScoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
