import { DonneesEauModel } from './donneesEau.model';

export interface CapteurEauModel {
    id: number;
    capteur_eau: string;
    seuil_1_eau_op: number;
    seuil_2_eau_op: number;
    seuil_3_eau_op: number;
    seuil_4_eau_op: number;
    seuil_5_eau_op: number;
    donnees_eaux: Array<DonneesEauModel>;
}

