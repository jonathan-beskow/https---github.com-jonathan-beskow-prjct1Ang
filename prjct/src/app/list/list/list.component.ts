import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { List } from './../../list/models/list';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { ListsService } from './../services/lists.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lista$: Observable<List[]>;
  //lista: List[] = [];
  displayedColumns = [ 'firstName', 'lastName', 'actions']


  //listsService : ListsService;

  constructor(private listsService : ListsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private service: ListsService) {
    //this.listsService = new ListsService();
    //this.lista= this.listsService.findAll();
    this.lista$= this.listsService.findAll()
    .pipe(
      catchError(error => {
        this.onError('Unexpected Error');
        return of([])
      })
    );
    //this.listsService.findAll().subscribe(lista => this.lista = lista);
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {

  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
