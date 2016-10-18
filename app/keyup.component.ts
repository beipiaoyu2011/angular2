import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'key-up1',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v1 {
  values = '';

  // without strong typing
  onKey(event:any) {
    this.values += event.target.value + ' | ';
  }
  // with strong typing
  // onKey(event: KeyboardEvent) {
  //   this.values += (<HTMLInputElement>event.target).value + ' | ';
  // }
}
////////////////////////////////////////////////////
@Component({
    selector: 'key-up2',
    template: `
    <input #box (keyup)="onkey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v2 {
    values = '';
    onkey(value: string) {
        this.values += value + '|';
    }
}
//////////////////////enter/////////////////////////////
@Component({
    selector: 'key-up3',
    template: `
    <input #box (keyup.enter)="values=box.value">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v3 {
    values = '';
}

////////////////////////////////
@Component({
    selector: 'key-up4',
    template: `
    <input #box (keyup.enter)="values=box.value" (blur)="values=box.value">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v4 {
    values = '';
}
