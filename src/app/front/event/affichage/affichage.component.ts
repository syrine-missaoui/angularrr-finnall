import { Component, OnInit, ViewChild } from '@angular/core';
import { EventcrudComponent } from '../../backoffice/eventcrud/eventcrud.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { evenementservice } from '../../backoffice/service/evenementservice';

import { MatDialog } from '@angular/material/dialog';
import { CoreService } from '../core/coreservice';
@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  displayedColumns: string[] = [
    'nom',
    'datedebut',
    'datedebut',
    
  ];
  evenement!:object;
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(     private _dialog: MatDialog,
    private _empService: evenementservice,
    private _coreService: CoreService) { }


  ngOnInit(): void {
    this._empService.getvenement();
  }
  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EventcrudComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getvenementliste();
        }
      },
    });
  }
  getvenementliste() {
    this._empService.getvenement().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteEmployee(id: number) {
    this._empService.deleteEvenement(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!', 'done');
        this.getvenementliste();
      },
      error: console.log,
    });
    
  }
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(EventcrudComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getvenementliste();
        }
      },
    });
  }

}
