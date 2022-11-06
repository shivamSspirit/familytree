import * as familyAPi from '../api/family'


export function addfamilyData(data, callback) {
    return async (dispatch) => {
        const response = await familyAPi?.postFamilyData(data);
        await dispatch(setFamilyData(response?.data))
        if (callback) {
            return callback();
        }
    };
}


export function getfamilyData(data, callback) {
    return async (dispatch) => {
        const response = await familyAPi?.getFamilyData();
        await dispatch(setFamilyData(response?.data))
        if (callback) {
            return callback();
        }
    };
}


export function setFamilyData(familydata) {
    return {
        type: "SET_FAMILY",
        familydata
    };
}


