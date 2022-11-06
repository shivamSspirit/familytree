export const family_state = {
    familyData: null,
    currentselectedfolder:null
};


export const familyReducer = (state = family_state, action) => {
    switch (action.type) {
        case "SET_FAMILY": {
            return {
                ...state,
                familyData: action.familydata
            };
        }

        case "SET_CURRENT_FOLDER":{
            return {
                currentselectedfolder:action.currentselectedfolder
            }
        }


        default:
            return state;
    }
}