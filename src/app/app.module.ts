import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ManojServiceService } from '../app/services/manoj-service.service';
import { GetDataComponent } from './get-data/get-data.component'

@NgModule({
  declarations: [
    AppComponent,
    GetDataComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [ ManojServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
