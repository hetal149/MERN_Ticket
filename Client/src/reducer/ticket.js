import { ADD_TICKET } from "../action/ticket-action";
  
  export default (tickets = [], action) => {
    switch (action.type) {
      case ADD_TICKET:
        return [action.payload,...tickets];
  
   }}
       
  