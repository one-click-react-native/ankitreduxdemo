export const ADDDATA='ADDDATA';
export const DETELEDATA='DELETEDATA';

export const addDataFunction=(data)=>{
    return {
            type:ADDDATA,
            dataName:data
        
    }
}

export const deleteDataFunction=(dataName)=>{
    return{
            type:DETELEDATA,
            dataName

        }
}