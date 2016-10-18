import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: '<hero-form></hero-form>'
    // templateUrl: 'app.component.html'
    // template:
    // `
    //     <h1>{{title}}</h1>
    //     <h2>My favorite hero is: {{myHero.name}}</h2>
    //     <ul>
    //       <li *ngFor='let hero of heroes'>
    //             {{hero.id}} || {{hero.name}}
    //       </li>
    //     </ul>
    //     <p *ngIf="heroes.length >  3">There are many heroes!</p>
    //  `
})
export class AppComponent {}
