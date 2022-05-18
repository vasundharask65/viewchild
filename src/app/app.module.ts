import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordsComponent } from './accords/accords.component';
import { AccordComponent } from './accord/accord.component';
import { AccordContentComponent } from './accord-content/accord-content.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabContentComponent } from './tab-content/tab-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordsComponent,
    AccordComponent,
    AccordContentComponent,
    TabsComponent,
    TabComponent,
    TabContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
