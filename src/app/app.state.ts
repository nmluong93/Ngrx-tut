import { Tutorial } from "./models/tutorial.model";

export interface AppState {
    /**this attribute must the the same as defined in 
     * -    StoreModule.forRoot({
                tutorial : reducer
            })
            ],

        - and store.select('tutorial')
     */
    readonly tutorial : Tutorial[];
}