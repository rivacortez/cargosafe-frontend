import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {VehiclesEntity} from "../../model/vehicles.entity";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-vehicles-create-and-edit',
  standalone: true,
  imports: [],
  templateUrl: './vehicles-create-and-edit.component.html',
  styleUrl: './vehicles-create-and-edit.component.css'
})
export class VehiclesCreateAndEditComponent {
// Attributes
  @Input() vehicle!: VehiclesEntity;
  @Input() editMode: boolean = false;
  @Output() vehicleAddRequested = new EventEmitter<VehiclesEntity>();
  @Output() vehicleUpdateRequested = new EventEmitter<VehiclesEntity>();
  @Output() cancelRequested = new EventEmitter();
  @ViewChild('vehicleForm', { static: false }) vehicleForm!: NgForm;


  constructor() {
    this.vehicle = new VehiclesEntity({});
  }


  private resetEditState() {
    this.vehicle = new VehiclesEntity({});
    this.editMode = false;
    this.vehicleForm.resetForm();
  }


  onSubmit() {
    if (this.vehicleForm.form.valid) {
      let emitter = this.editMode ? this.vehicleUpdateRequested : this.vehicleAddRequested;
      emitter.emit(this.vehicle);
      this.resetEditState();
    } else {
      console.error('Invalid form data');
    }
  }

  onCancel() {
    this.cancelRequested.emit();
    this.resetEditState();
  }



}
