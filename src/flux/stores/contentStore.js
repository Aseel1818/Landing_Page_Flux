import dispatcher from "../dispatcher/landingDispatcher";
import EventEmitter from "events";


class Store extends EventEmitter{
  constructor(){
    super();
    this.data = {
      about: "We are a company dedicated to providing top-tech services.",
      mission: "Our mission is to deliver quality and excellence",
      services: ["Web Development", "Mobile APPs", "Cloud Solutions", "UI UX"],
      team:[
        {name : "Alice", role : "CEO"},
        {name : "Dana", role : "Developer"},
        {name : "Mohammad", role : "QA"},
        {name : "Shymaa", role : "UI UX"}

      ]
    };
  }

  getData(){
    return this.data;

  }

  handleActions(){
    if(action.type === "LOAD_CONTENT" ){
      this.emit("change");
    }
  }
} 

const store = new Store();
dispatcher.register(store.handleActions.bind(store));
export default store;