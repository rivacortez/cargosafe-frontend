import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {VehiclesEntity} from "../model/vehicles.entity";

@Injectable({
  providedIn: 'root'
})
export class VehiclesService extends  BaseService<VehiclesEntity>{

  constructor() {
    super();
    this.resourceEndpoint = '/vehicles';

  }
}
