import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
// import { AddComponent } from './add/add.component';
// import { UpdateComponent } from './update/update.component';
// import { DeleteComponent } from './delete/delete.component';
// import { AllComponent } from './all/all.component';
// import { TimeComponent } from './time/time.component';
import { AmazingTimePickerModule } from 'amazing-time-picker'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BodyComponent,
    FooterComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmazingTimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
