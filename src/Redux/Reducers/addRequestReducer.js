const initialState={
    formHeader:{
        logo: null,
        compagnyName: '',
    },
    formTitle:{
        title: '',
        description: ''
    },
    cardQuestion:[{
        questionTitle: '',
        questionType: 1,
        questionCourte: '',
        questionLongue: '',
        choixMultiple:'1',
        caseaCocher: '2',
        telechargerFichier: null,
        date:null,
        heure:null,
        delete: false,
        obligatoire: false,
       
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