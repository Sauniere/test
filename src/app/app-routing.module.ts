import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InconnuComponent } from './inconnu/inconnu.component';
import { ReceptionComponent } from './reception/reception.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
    { path: '', redirectTo: 'Accueil', pathMatch: 'full' },
    { path: 'Reception/:ID/:Voltage', component: ReceptionComponent },
    { path: 'Reception', component: ReceptionComponent },
    { path: 'App/:ID/:Voltage', component: AppComponent },
    { path: 'Accueil', component: AccueilComponent },
    { path: '**', component: InconnuComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
