import {ADDDATA,DETELEDATA} from '../Actions/Actions';

const intialState=[]

const dataReducer=(state=intialState,action)=>{
    console.log("Action   :",action.data)
    switch(action.type){
        case ADDDATA:
            console.log("SHow add Data");
            let updatedState=[...state];
            updatedState.push(action.dataName);
            return updatedState;
        case DETELEDATA:
            console.log("Delete Data actions");
            let deletedState=state.filter(data=>data.name!==action.dataName);
            return deletedState;
    }
    return state;
}

export default dataReducer;