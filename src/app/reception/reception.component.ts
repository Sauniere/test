import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ReceptionService } from '../reception.service';
import { HeureCompleteLocalPipe } from '../date.pipe';
import { DateCompleteLocalPipe } from '../date.pipe';
import { DateTimeLocalPipe } from '../date.pipe';
import { HeureLocalPipe } from '../date.pipe';
import { MinuteLocalPipe } from '../date.pipe';
import { SecondeLocalPipe } from '../date.pipe';
import { HeureBddLocalPipe } from '../date.pipe';
import { MinuteBddLocalPipe } from '../date.pipe';
import { SecondeBddLocalPipe } from '../date.pipe';
import { RoundPipe } from '../date.pipe';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { BoitierModel } from '../models/boitier.model';
import { CapteurEauModel } from '../models/capteureau.model';
import { DonneesEauModel } from '../models/donneesEau.model';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css'],
  providers: [ReceptionService, HeureCompleteLocalPipe, DateCompleteLocalPipe, DateTimeLocalPipe,
    HeureLocalPipe, MinuteLocalPipe, SecondeLocalPipe, HeureBddLocalPipe, MinuteBddLocalPipe, SecondeBddLocalPipe, RoundPipe]
})
export class ReceptionComponent implements OnInit {

  boitier: BoitierModel;
  capteurEau: CapteurEauModel;
  donneesEau: DonneesEauModel;
  capteurId: any;

  device_id: any;
  id: any;
  Voltage: any;
  niveau_eau: any;
  vitesse: any;
  datetime: any;
  date: any;
  heure: any;

  heure1: any;
  heure2: any;

  minute1: any;
  minute2: any;

  seconde1: any;
  seconde2: any;

  deltaH: any;
  deltaM: any;
  deltaS: any;
  deltaT: any;

  hauteur1: any;
  hauteur2: any;

  vitesseCalcule: any;

  registrationFailed = false;

  constructor(private activatedRoute: ActivatedRoute,
    private receptionService: ReceptionService,
    private heureCompleteLocalPipe: HeureCompleteLocalPipe,
    private dateCompleteLocalPipe: DateCompleteLocalPipe,
    private dateTimeLocalPipe: DateTimeLocalPipe,
    private heureLocalPipe: HeureLocalPipe,
    private minuteLocalPipe: MinuteLocalPipe,
    private secondeLocalPipe: SecondeLocalPipe,
    private heureBddLocalPipe: HeureBddLocalPipe,
    private minuteBddLocalPipe: MinuteBddLocalPipe,
    private secondeBddLocalPipe: SecondeBddLocalPipe,
    private roundPipe: RoundPipe) {


    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params);
      this.device_id = params.ID;
      this.Voltage = params.Voltage;
      console.log(this.device_id);
      console.log(this.Voltage);
    });

    // this.device_id = this.activatedRoute.snapshot.params['ID'];
    // console.log(this.device_id);
    // this.Voltage = this.activatedRoute.snapshot.params['Voltage'];
    // console.log(this.Voltage);

    this.heure = this.heureCompleteLocalPipe.transform();
    console.log('heure', this.heure);

    this.date = this.dateCompleteLocalPipe.transform();
    console.log('date', this.date);

    this.datetime = this.dateTimeLocalPipe.transform();
    console.log('datetime', this.datetime);

    this.niveau_eau = (0.000000386 * this.Voltage * this.Voltage + 0.00536 * this.Voltage + 2.73706);
    if (this.niveau_eau < 3.7) {
      this.niveau_eau = 0;
    } else {
      this.niveau_eau = this.niveau_eau - 3.7;
    }

    console.log('niveau eau', this.niveau_eau);

    this.niveau_eau = this.roundPipe.transform(this.niveau_eau, 2);

    console.log('niveau eau arrondi', this.niveau_eau);

    this.receptionService.getBoitier(this.device_id).subscribe(boitier => {
      this.boitier = boitier;
      console.log('le boitier est:', this.boitier);

      this.capteurId = this.boitier.capteur_eaux[0].id;
      console.log('lid du capteur eau est:', this.capteurId);

      this.receptionService.getCapteurEau(this.capteurId).subscribe(capteurEau => {
        this.capteurEau = capteurEau;

        console.log('la longueur du capteur deau en donnees eau est', this.capteurEau.donnees_eaux.length);

        if (this.capteurEau.donnees_eaux.length === 0) {

          this.vitesse = 0;


          this.addValeurEau();
        } else {


          this.receptionService.getLastValueDonneesEau(this.capteurId).subscribe(donneesEau => {
            this.donneesEau = donneesEau;
            console.log('la derniere donnees eau est:', this.donneesEau);


            console.log('coucou super', this.donneesEau[0].datetime);

            this.hauteur2 = this.donneesEau[0].niveau_eau;
            console.log('la hauteur eau de la bdd est:', this.hauteur2);

            this.heure2 = this.heureBddLocalPipe.transform(this.donneesEau[0].datetime);
            console.log('super l heure de la bdd est:', this.heure2);

            this.minute2 = this.minuteBddLocalPipe.transform(this.donneesEau[0].datetime);
            console.log('super les minutes de la bdd est:', this.minute2);

            this.seconde2 = this.secondeBddLocalPipe.transform(this.donneesEau[0].datetime);
            console.log('super les secondes de la bdd est:', this.seconde2);

            this.heure1 = this.heureLocalPipe.transform();
            console.log('heure 1 est:', this.heure1);

            this.minute1 = this.minuteLocalPipe.transform();
            console.log('minute 1 est:', this.minute1);

            this.seconde1 = this.secondeLocalPipe.transform();
            console.log('seconde 1 est:', this.seconde1);

            this.deltaH = this.heure1 - this.heure2;
            if (this.deltaH < 0) {
              this.deltaH = 24 + this.deltaH;
            }
            this.deltaM = this.minute1 - this.minute2;
            if (this.deltaM < 0) {
              this.deltaM = 60 + this.deltaM;
            }
            this.deltaS = this.seconde1 - this.seconde2;
            if (this.deltaS < 0) {
              this.deltaS = 60 + this.deltaS;
            }

            this.deltaH = this.deltaH * 60;
            this.deltaS = this.deltaS / 60;

            this.deltaT = this.deltaH + this.deltaM + this.deltaS;

            this.hauteur1 = this.niveau_eau;

            this.vitesseCalcule = ((this.hauteur1 - this.hauteur2) * 10) / this.deltaT;
            console.log('la vitesse calculé est la suivante', this.vitesseCalcule);

            this.vitesse = this.roundPipe.transform(this.vitesseCalcule, 2);

            console.log('la vitesse arrondi calculé est la suivante', this.vitesse);

            this.addValeurEau();


          });
        }
      });
    });
  }

  ngOnInit() {
  }


  addValeurEau() {
    this.receptionService.addDonneesEau(
      this.capteurId,
      this.Voltage,
      this.niveau_eau,
      this.vitesse,
      this.datetime,
      this.date,
      this.heure,
    ).subscribe(
      () => this.registrationFailed = true,
    );
  }

}
