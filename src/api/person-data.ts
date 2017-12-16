import {Person} from '../app/people/person';

export const PERSON_ITEMS: Person[] = [
    {
      id: 1,
      name: 'Boris Pavlov',
      notes: 'Master of Computer Science 1',
      due: new Date(new Date().setDate(new Date().getDate() + 4)),
      done: false
    }, {
      id: 2,
      name: 'Angel Gerdzhikov',
      notes: 'Master of Computer Science 2',
      due: new Date(new Date().setDate(new Date().getDate() + 5)),
      done: false
    }, {
      id: 3,
      name: 'Krasimir Dzhigovecki',
      notes: 'Master of Computer Science 3',
      due: new Date(new Date().setDate(new Date().getDate() - 1)),
      done: true
    }
   ];
