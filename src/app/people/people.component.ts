import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

import {Person} from './person';
import { PeopleService } from './people.service';

export enum SaveMode {
  None,
  New,
  Edit
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {

  formGroup: FormGroup;
  persons: Person[];
  saveMode: SaveMode = SaveMode.None;
  headerText: string;

  constructor(private _peopleService: PeopleService, private _formBuilder: FormBuilder) {
    this.formGroup = _formBuilder.group({
      'id': '',
      'name': '',
      'due': '',
      'done': '',
      'notes': ''});
  }

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.persons = this._peopleService.get();
  }

  save(person: Person) {
    if (person.id) {
      this._peopleService.update(person);
    } else {
      this._peopleService.add(person);
    }
    this.saveMode = SaveMode.None;
  }

  remove(person: Person) {
    this._peopleService.delete(person);
  }

  cancelEdit() {
    this.formGroup.reset();
    this.saveMode = SaveMode.None;
  }

  showEditForm(person: Person) {
    if (!person) {
      return;
    }
    this.saveMode = SaveMode.Edit;
    this.headerText = 'Edit person';
    const editedPerson = Object.assign({}, person, { due: this.applyLocale(person.due) });
    this.formGroup.setValue(editedPerson);
  }

  showNewForm() {
    this.formGroup.reset();
    this.saveMode = SaveMode.New;
    this.headerText = 'New Person';
  }

  showForm() {
    return this.saveMode !== SaveMode.None;
  }

  applyLocale(due) {
    return new DatePipe(navigator.language).transform(due, 'y-MM-dd');
  }

}
