import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule, Headers } from '@angular/http';
import { FormControl, FormGroup, FormBuilder, Validators, NgControl, ControlContainer } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReceptionComponent } from './reception/reception.component';
import { InconnuComponent } from './inconnu/inconnu.component';
import { AccueilComponent } from './accueil/accueil.component';

import { ReceptionService } from './reception.service';

import { AnneeLocalPipe, MoisLocalPipe, JourLocalPipe, HeureCompleteLocalPipe, DateCompleteLocalPipe } from './date.pipe';
import { DateTimeLocalPipe, HeureLocalPipe, MinuteLocalPipe, SecondeLocalPipe, HeureBddLocalPipe } from './date.pipe';
import { MinuteBddLocalPipe, SecondeBddLocalPipe, RoundPipe, AbsoluePipe } from './date.pipe';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ReceptionComponent,
    InconnuComponent,
    AccueilComponent,
    AnneeLocalPipe,
    MoisLocalPipe,
    JourLocalPipe,
    HeureCompleteLocalPipe,
    DateCompleteLocalPipe,
    DateTimeLocalPipe,
    HeureLocalPipe,
    MinuteLocalPipe,
    SecondeLocalPipe,
    HeureBddLocalPipe,
    MinuteBddLocalPipe,
    SecondeBddLocalPipe,
    RoundPipe,
    MenuComponent,
    AbsoluePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ReceptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
