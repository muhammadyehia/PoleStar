import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { PoleStarComponent }  from './polestar.component';

@NgModule({
  imports:      [ BrowserModule ,HttpModule],
  declarations: [ PoleStarComponent ],
  bootstrap:    [ PoleStarComponent ]
})
export class AppModule { }
