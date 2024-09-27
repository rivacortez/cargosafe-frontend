import {model} from "@angular/core";

export class VehiclesEntity {

  id: number;
  model: string;
  plate: string;
  max_load: string;
  volume: string;
  url_image: string;
  constructor(vehicles:{id?: number, model?: string, plate?: string, max_load?: string, volume?: string, url_image?: string} ) {
    this.id = vehicles.id || 0;
    this.model = vehicles.model || '';
    this.plate = vehicles.plate || '';
    this.max_load = vehicles.max_load || '';
    this.volume = vehicles.volume || '';
    this.url_image = vehicles.url_image || '';
  }

}
