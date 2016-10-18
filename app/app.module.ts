import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ClickMeComponent }  from './click-me.component';
import {
  KeyUpComponent_v1,
  KeyUpComponent_v2,
  KeyUpComponent_v3,
  KeyUpComponent_v4
} from './keyup.component';
import { LoopbackComponent } from './loop-back.component';
import { LitterTourComponent } from './litter-tour.component';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ClickMeComponent,
        KeyUpComponent_v1,
        KeyUpComponent_v2,
        KeyUpComponent_v3,
        KeyUpComponent_v4,
        LoopbackComponent,
        LitterTourComponent,
        HeroFormComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
