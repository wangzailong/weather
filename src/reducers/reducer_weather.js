export default function(state = [], action){
    switch(action.type){
        case 'FETCH_WEATHER':
        // return  state.concat([action.payload.data]);
        return [action.payload.data,...state];// [city,city] NOt[city,[city]]
    }
    return state
}