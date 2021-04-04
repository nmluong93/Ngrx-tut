import { Tutorial } from "../models/tutorial.model";
import * as TutorialActions from '../actions/tutorial.actions';
import { Action, createReducer, on } from "@ngrx/store";

export const initialState: Tutorial = {
    name: 'google',
    url: 'https://google.com'
}

const reducerTutorial = createReducer([initialState],
    on(TutorialActions.addTutorial, (state, tutorial) => [...state, tutorial]),
    on(TutorialActions.removeTutorial, (state, { index }) => {
        return state.splice(index, 1);
    }
    )
);
export function reducer(states: Tutorial[] = [initialState], action: Action) {
    return reducerTutorial(states, action);
}


