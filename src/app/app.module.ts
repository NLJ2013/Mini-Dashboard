import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';
import { AppRoutingModule , routingComponents} from './app-routing.module'
import { AppComponent } from './app.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MaterialModule} from './material/material.module'; 
import { from } from 'rxjs';
import { LandingComponent } from './landing/landing.component'; // importing landing page component
import { FlexLayoutModule } from '@angular/flex-layout';// importing flex layout
import { BookTableComponent } from './book-table/book-table.component'; 
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule } from '@angular/http';
import { CustomDivComponent } from './custom-div/custom-div.component';




@NgModule({ 
   declarations: [
      AppComponent,
      routingComponents,
      LandingComponent,
      BookTableComponent,
      CustomDivComponent
   ], 
   imports: [ 
      BrowserModule, BrowserAnimationsModule,MaterialModule, AppRoutingModule,FlexLayoutModule,HttpClientModule,
      HttpModule,JsonpModule 
   ], 
   providers: [], 
      bootstrap: [AppComponent] 
      
}) 
export class AppModule { }