const initialState={
    formHeader:{
        logo: '',
        compagnyName: '',
    },
    formTitle:{
        title: '',
        description: ''
    },
    cardQuestion:[{
        questionTitle: '',
        questionType: 'question-courte',
        questionCourte: '',
        questionLongue: '',
        choixMultiple:'1',
        caseaCocher: '2',
        date:null,
        heure:null,
        delete: false,
        obligatoire: false,
        when: 'question-courte'
    }]
}

const addRequestReducer=(state = initialState,action)=>{

 switch(action.type){
    case 'SET_STATE':
        return {...state, ...action.payload}
        default:
            return state
}
}

export default addRequestReducer