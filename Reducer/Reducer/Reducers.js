import {ADDDATA,DETELEDATA} from '../Actions/Actions';

const intialState={
    todos:[]
}

const dataReducer=(state=intialState,action)=>{
    console.log("Action   :",state)
    switch(action.type){
        case ADDDATA:
            console.log("SHow add Data",state);
            let updatedState=[...state.todos];
            updatedState.push(action.dataName);
            return{
                ...state,
                todos:updatedState
            };
        case DETELEDATA:
            console.log("Delete Data actions");
            let deletedState=state.todos.filter(data=>data.name!==action.dataName);
            return {
                ...state,
                todos:deletedState
            };
    }                               
    return state;
}

export default dataReducer;