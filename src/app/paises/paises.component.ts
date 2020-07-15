import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  paises: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): any {
    this.http.get("https://restcountries.eu/rest/v2/lang/es")
             .subscribe(data => this.paises = data)
  }

  drop(event: CdkDragDrop<any>){
    moveItemInArray(this.paises, event.previousIndex, event.currentIndex)
  }
}
