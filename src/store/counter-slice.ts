/**
 * Naming convention of state slices: name-slice
 * You declare and setup the reducers and actions related to a given 
 * store state slice
 */

import { createSlice } from '@reduxjs/toolkit';

interface Counter {
    counter: number,
    showCounter: boolean
}

const initialCounterState: Counter = { counter: 0, showCounter: true };

/**
 * The state argument is provided for you and contains the latest state version
 * The action argument contains the payload for the cases you need one and
 * is also provided for you if you specify it in the reducer.
 */
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  /**
   * <reducers> contains the different operations/methods you'd want
   * to execute on the concerned state slice
   */
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

/**
 * Behind the scenes, what happens here is the following:
 * counterSlice.actions creates methods called "action creators" with a unique
 * identifier per action.  Those identifiers are based on the reducers names.
 * You can the access those action creators as follows:
 * Example: counterActions.toggleCounter()
 * Executing this will return an action object of this shape:
 * { type: 'some unique identifier', payload}
 * Those are the objects that will be passed to the dispatch method.  See README.md
 * to understand what dispatch means.
 */
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;