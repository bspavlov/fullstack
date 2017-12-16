import { Injectable } from '@angular/core';

import { Person } from './person';
import { PERSON_ITEMS } from '../../api/person-data';

@Injectable()
export class PeopleService {

  pItems: Person[] = PERSON_ITEMS;

  constructor() { }

  get(): Person[] {
    return this.pItems;
  }

  add(person: Person) {
    this.pItems.push(person);
  }

  update(person: Person) {
    const index = this.pItems.map(x => x.id).indexOf(person.id);
    this.pItems[index] = person;
  }

  delete(person: Person) {
    this.pItems.splice(this.pItems.indexOf(person), 1);
  }

}
