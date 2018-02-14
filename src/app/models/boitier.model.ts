import { CapteurEauModel } from './capteurEau.model';

export interface BoitierModel {
    id: number;
    deviceId: string;
    adresse: string;
    codePostal: string;
    ville: string;
    infoComplementaire: string;
    latitude: string;
    longitude: string;
    dateInstallation: string;
    versionProgramme: string;
    capteur_eaux: Array<CapteurEauModel>;

}

