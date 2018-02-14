import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Pipe({
    name: 'anneeLocalPipe'
})
export class AnneeLocalPipe implements PipeTransform {

    transform(): any {
        const a = Date.now();
        const annee = moment(a).format('YYYY');
        return annee;

    }

}

@Pipe({
    name: 'moisLocalPipe'
})
export class MoisLocalPipe implements PipeTransform {

    transform(): any {
        const m = Date.now();
        const mois = moment(m).format('MM');
        return mois;

    }

}

@Pipe({
    name: 'jourLocalPipe'
})
export class JourLocalPipe implements PipeTransform {

    transform(): any {
        const j = Date.now();
        const jour = moment(j).format('DD');
        return jour;

    }

}


@Pipe({
    name: 'heureLocalPipe'
})
export class HeureLocalPipe implements PipeTransform {

    transform(): any {
        const h = Date.now();
        const heure = moment(h).format('HH');
        return heure;

    }

}

@Pipe({
    name: 'heureBddLocalPipe'
})
export class HeureBddLocalPipe extends DatePipe implements PipeTransform {

    transform(value: any) {
        const date = new Date(value);
        const heure = moment(date).format('HH');
        return heure;
     }

}

@Pipe({
    name: 'minuteBddLocalPipe'
})
export class MinuteBddLocalPipe extends DatePipe implements PipeTransform {

    transform(value: any) {
        const date = new Date(value);
        const minute = moment(date).format('mm');
        return minute;
     }

}

@Pipe({
    name: 'secondeBddLocalPipe'
})
export class SecondeBddLocalPipe extends DatePipe implements PipeTransform {

    transform(value: any) {
        const date = new Date(value);
        const seconde = moment(date).format('ss');
        return seconde;
     }

}

@Pipe({
    name: 'minuteLocalPipe'
})
export class MinuteLocalPipe implements PipeTransform {

    transform(): any {
        const m = Date.now();
        const minute = moment(m).format('mm');
        return minute;

    }

}

@Pipe({
    name: 'secondeLocalPipe'
})
export class SecondeLocalPipe implements PipeTransform {

    transform(): any {
        const s = Date.now();
        const seconde = moment().format('ss');
        return seconde;

    }

}

@Pipe({
    name: 'heureCompleteLocalPipe'
})
export class HeureCompleteLocalPipe implements PipeTransform {

    transform(): any {
        const hc = Date.now();
        const heureComplete = moment(hc).format('HH:mm:ss');
        return heureComplete;

    }

}

@Pipe({
    name: 'dateCompleteLocalPipe'
})
export class DateCompleteLocalPipe implements PipeTransform {

    transform(): any {
        const dc = Date.now();
        const dateComplete = moment(dc).format('YYYY-MM-DD');
        return dateComplete;

    }

}

@Pipe({
    name: 'dateTimeLocalPipe'
})
export class DateTimeLocalPipe implements PipeTransform {

    transform(): any {
        const d = Date.now();
        const dateTime = moment(d).format('YYYY-MM-DD HH:mm:ss');
        return dateTime;

    }

}


@Pipe({
    name: 'round'
})
export class RoundPipe implements PipeTransform {
    /**
     *
     * @param value
     * @returns {number}
     */
    transform(value: number, precision): number {
        const facteur = Math.pow(10, precision);
        return (Math.round(value * facteur)) / facteur;
    }
}

@Pipe({
    name: 'absolue'
})
export class AbsoluePipe implements PipeTransform {
    /**
     *
     * @param value
     * @returns {number}
     */
    transform(value: number): number {
        const abs = Math.abs(value);
        return abs;
    }
}
