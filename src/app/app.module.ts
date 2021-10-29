import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LawsComponent } from './laws/laws.component';
import { LawComponent } from './laws/law/law.component';
import { DefinitionsComponent } from './definitions/definitions.component';
import { DefinitionComponent } from './definitions/definition/definition.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    LawsComponent,
    LawComponent,
    DefinitionsComponent,
    DefinitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
