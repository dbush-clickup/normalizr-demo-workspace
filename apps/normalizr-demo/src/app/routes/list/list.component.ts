import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from '../../shared/contacts/contact';
import { selectAllContacts } from '../../shared/contacts/contact.selectors';
import { loadContacts } from '../../shared/contacts/contacts.actions';
import { SharedState } from '../../shared/shared-state';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allContacts: Observable<Array<Contact>>;

  constructor(private store: Store<SharedState>) {
    this.allContacts = this.store.select(selectAllContacts);
  }

  ngOnInit() {
    this.store.dispatch(loadContacts());
  }

}
