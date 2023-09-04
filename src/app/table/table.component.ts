import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns: string[] = ['position', 'name', 'projects', 'completed'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


 

}
export interface PeriodicElement {
  name: string;
  position: number;
  projects: number;
  completed: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Angular', projects: 23, completed: '20'},
  {position: 2, name: 'React', projects: 14, completed: '14'},
  {position: 3, name: 'Javascript', projects: 35, completed: '32'},
  {position: 4, name: 'Python', projects: 19, completed: '17'},
  {position: 5, name: 'Big Data', projects: 10, completed: '10'},
  {position: 6, name: 'ML', projects: 12, completed: '12'},
  {position: 7, name: 'AI', projects: 14, completed: '5'},
  {position: 8, name: 'Flutter', projects: 15, completed: '1O'},
  {position: 9, name: 'Php', projects: 18, completed: '13'},
  {position: 10, name: '.Net', projects: 20, completed: '17'},
];
