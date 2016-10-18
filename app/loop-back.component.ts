import { Component } from '@angular/core';
//自身绑定
@Component({
    selector: 'loop-back',
    template: `
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { }
