import { ListsService } from './../services/lists.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnimationDurations } from '@angular/material/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: ListsService,
    private snackbar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      firstName: [null],
      lastName: [null]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());
  }
  onCancel(){
    this.location.back();
  }

  private onSuccess() {
    this.snackbar.open('Registered user!','', {duration: 3000});
    this.onCancel();
  }

  private onError(){
    this.snackbar.open('Sorry, an error has happened','', {duration: 3000});
  }

}
