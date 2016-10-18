import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
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
export class AppComponent {
    // title: string;
    // myHero: string;
    // heroes = [
    //     new Hero(1, 'Windstorm'),
    //     new Hero(13, 'Bombasto'),
    //     new Hero(15, 'Magneta'),
    //     new Hero(20, 'Tornado')
    // ];
    // myHero = this.heroes[0];
    // constructor() {
    //     this.title = 'hello';
    //     console.log(this.heroes);
    //     this.myHero = hreoes[0];
    //     this.heroes = hreoes;
    // }
}
