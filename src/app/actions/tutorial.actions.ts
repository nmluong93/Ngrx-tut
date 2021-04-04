import { Action, createAction, props } from "@ngrx/store";
import { Tutorial } from "../models/tutorial.model";


export const ADD_TUTORIAL = '[Tutorial] add';
export const REMOVE_TUTORIAL = '[Tutorial] remove';


export const addTutorial = createAction(ADD_TUTORIAL, props<Tutorial>());

export const removeTutorial = createAction(REMOVE_TUTORIAL, props<{index: number}>());