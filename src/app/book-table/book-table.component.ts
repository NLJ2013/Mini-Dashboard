/**
 * 20191201  Init and added code to extract data from the JSON
 */
import { Component, OnInit,ViewChild} from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface test {
}

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})


export class BookTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'type', 'content', 'link'];//table headers
  items2 : test[];
  dataSource = new MatTableDataSource(this.items2);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private http: Http) {
   
     this.http
      .get("http://localhost:4200/assets/example.json").pipe(
      map(data => data.json() as test[]))
      .subscribe(data => {
        this.items2 = data;
        console.log(this.items2);
        });
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
