import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {VehiclesEntity} from "../../model/vehicles.entity";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {VehiclesService} from "../../services/vehicles.service";
import {
  VehiclesCreateAndEditComponent
} from "../../components/vehicles-create-and-edit/vehicles-create-and-edit.component";
import {MatCard, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-vehicles-management',
  standalone: true,
  imports: [
    VehiclesCreateAndEditComponent,
    MatCard,
    MatCardTitle,
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatIcon,
    MatIconButton,
    MatHeaderRow,
    MatPaginator,
    MatRow,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './vehicles-management.component.html',
  styleUrl: './vehicles-management.component.css'
})
export class VehiclesManagementComponent implements OnInit, AfterViewInit {

  //#region Attributes

  protected vehicleData!: VehiclesEntity;
  protected columnsToDisplay: string[] = ['model', 'plate', 'max_load', 'volume','url_image'];
  @ViewChild(MatPaginator, {static: false})
  protected paginator!: MatPaginator;
  @ViewChild(MatSort)
  protected sort!: MatSort;
  protected editMode: boolean = false;
  protected dataSource!: MatTableDataSource<any>;
  private vehicleService: VehiclesService = inject(VehiclesService);

  //#endregion

  //#region Methods

  constructor() {
    this.editMode = false;
    this.vehicleData = new VehiclesEntity({});
    this.dataSource = new MatTableDataSource();
    console.log(this.vehicleData);
  }
  onSubmit(): void {
    if (this.editMode) {

      this.onVehicleUpdateRequested(this.vehicleData!);
    } else {

      const newVehicle: VehiclesEntity = {
        id: this.dataSource.data.length + 1,
        model: this.vehicleData?.model || '',
        plate: this.vehicleData?.plate || '',
        max_load: this.vehicleData?.max_load || '',
        volume: this.vehicleData?.volume || '',
        url_image: this.vehicleData?.url_image || '',
      };
      this.onVehicleAddRequested(newVehicle);
    }
  }

  protected onEditItem(item: VehiclesEntity) {
    this.editMode = true;
    this.vehicleData = item;
  }

  protected onDeleteItem(item: VehiclesEntity) {
    this.deleteVehicle(item.id);
  }

  protected onCancelRequested() {
    this.resetEditState();
    this.getAllVehicles();
  }

  protected onVehicleAddRequested(item: VehiclesEntity) {
    this.vehicleData = item;
    this.createVehicle();
    this.resetEditState();
  }

  protected onVehicleUpdateRequested(item: VehiclesEntity) {
    this.vehicleData = item;
    this.updateVehicle();
    this.resetEditState();
  }

  private resetEditState() {
    this.vehicleData = new VehiclesEntity({});
    this.editMode = false;
  }

  private getAllVehicles() {
    this.vehicleService.getAll().subscribe((response: Array<VehiclesEntity>) => {
      this.dataSource.data = response;
    });
  }

  private createVehicle() {
    this.vehicleService.create(this.vehicleData).subscribe((response: VehiclesEntity) => {
      this.dataSource.data.push(response);
      this.dataSource.data = this.dataSource.data;
    });
  }

  private updateVehicle() {
    let vehicleToUpdate = this.vehicleData;
    this.vehicleService.update(vehicleToUpdate.id, vehicleToUpdate).subscribe((response: VehiclesEntity) => {
      let index = this.dataSource.data.findIndex((vehicle: VehiclesEntity) => vehicle.id === response.id);
      this.dataSource.data[index] = response;
      this.dataSource.data = this.dataSource.data;
    });
  }

  private deleteVehicle(id: number) {
    this.vehicleService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((vehicle: VehiclesEntity) => vehicle.id !== id);
    });
  }

  //#endregion

  //#region Lifecycle Hooks

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllVehicles();
  }

  //#endregion
}
