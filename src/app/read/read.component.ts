import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeTutorial } from '../actions/tutorial.actions';
import { AppState } from '../app.state';
import { Tutorial } from '../models/tutorial.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;
  
  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  ngOnInit(): void {
  }

  delTutorial(index: number) {
    this.store.dispatch(removeTutorial({index}));
  }
}
