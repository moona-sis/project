const initialState = {
    wordFilter : '',
    experienceFilter: '',
    wialyaFilter: '',
    ageFilter: '',

}
const filterReducer=(state=initialState, action) => {
    switch (action.type) {
        case 'SET_STATE':
            return { ...state, ...action.payload }
        default:
            return state
    }

}
export default  filterReducer