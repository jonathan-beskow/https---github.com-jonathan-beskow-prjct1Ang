import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from './../models/list';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  private readonly API = 'api/lista';

  constructor(private HttpClient: HttpClient) { }

  findAll() {
    return this.HttpClient.get<List[]>(this.API)
    .pipe(first(), delay(500),
      tap(nomes => console.log(nomes))
    );
  }

  save(record: List) {
    return this.HttpClient.post<List>(this.API, record).pipe(first());
  }

}
