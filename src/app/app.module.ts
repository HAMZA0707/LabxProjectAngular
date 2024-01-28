import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestAnalyseComponent } from './test-analyse/test-analyse.component';
import { TypeAnalyseComponent } from './type-analyse/type-analyse.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { EchantillonComponent } from './echantillon/echantillon.component';
import { PlanificationComponent } from './planification/planification.component';

@NgModule({
  declarations: [
    AppComponent,
    TestAnalyseComponent,
    TypeAnalyseComponent,
    AnalyseComponent,
    EchantillonComponent,
    PlanificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }