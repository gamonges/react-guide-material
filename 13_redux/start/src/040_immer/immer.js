import { produce } from "immer";

const state = {
  name: "Tom",
  hobbies: ["tennis", "soccer"],
};
const newState = state;
newState.name = "John";

//const newState = produce(state, (draft) => {
//  draft.name = "Jon";
//  console.log(draft);
//});

console.log(state, newState);
