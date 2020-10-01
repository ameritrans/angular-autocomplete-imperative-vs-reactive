import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TypeaheadImperativeComponent } from './typeahead-imperative.component';
import { TypeaheadReactiveComponent } from './typeahead-reactive.component';
import { ApiService} from './api.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TypeaheadImperativeComponent, TypeaheadReactiveComponent ],
  providers: [ ApiService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
