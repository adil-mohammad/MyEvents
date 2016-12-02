import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routings/app-routing.module';
import { AppComponent }  from '../controllers/app.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports: [ BrowserModule , AppRoutingModule , FormsModule , HttpModule, JsonpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }