import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTutorial } from '../actions/tutorial.actions';
import { AppState } from '../app.state';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
  }

  add_Tutorial(name: string, url: string) {
    this.store.dispatch(addTutorial({name: name, url: url}));
  }
}
