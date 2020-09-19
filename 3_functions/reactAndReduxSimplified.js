const dispatchTable = {
    CREATE: (state, action) => {
         // do something 
         return newState;
    },
    DELETE: (state, action) =>{
        // do something

        return newState;

    },
    UPDATE: (state, action) => {
        // do something

        return newState;
    }
}

function doAction(state = initialState, action){
    return dispatchTable[action.type]
          ? dispatchTable[action.type](state, action)
          : state;
}