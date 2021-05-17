import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  arrayFilter: any[];
  arraySort: any[];
  constructor() { }

  ngOnInit(): void {
    this.arrayFilter = [
      {name: 'без фильра', value: 'none'},
      {name: 'книги в наличии', value: 'empty'},
      {name: 'нет в наличии', value: 'non-empty'}
    ];
    this.arraySort = [
      {name: 'дате добавления', value: 'date'},
      {name: 'количеству книг', value: 'count'},
      {name: 'дата добавления', value: 'date'},
    ];
  }

}
