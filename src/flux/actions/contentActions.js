import dispatcher from "../dispatcher/landingDispatcher";

export const loaddContent = () =>{
  dispatcher.dispatch({type: 'LOAD_CONTENT'});
}