const Cards =[
 
    {
        commune: 'Kouba',
        wilaya: 'Alger',
        nomPrenom : 'Mouna SI SMAIL',
        img: '/assets/image-profil.jpg',
        post: 'Digital manager',
        diplome: 'Master en marketing digital',
        competences: 'Facebook, instagram, linkedin',
        experience: '7',
        age:35
    },
    {
        commune: 'Kouba',
        wilaya: 'Alger',
        nomPrenom : 'Mouna SI SMAIL',
        img: '/assets/image-profil.jpg',
        post: 'Digital manager',
        diplome: 'Mater en marketing digital',
        competences: 'Facebook, instagram, linkedin',
        experience: '2',
        age:25
    },
    {
        commune: 'Kouba',
        wilaya: 'Alger',
        nomPrenom : 'Mouna SI SMAIL',
        img: '/assets/image-profil.jpg',
        post: 'Digital manager',
        diplome: 'Mater en marketing digital',
        competences: 'Facebook, instagram, linkedin',
        experience: '6',
        age:30
    },
    {
        commune: 'Kouba',
        wilaya: 'Alger',
        nomPrenom : 'Mouna SI SMAIL',
        img: '/assets/image-profil.jpg',
        post: 'Digital manager',
        diplome: 'Mater en marketing digital',
        competences: 'Facebook, instagram, linkedin',
        experience: '10',
        age:40
    },
    {
        commune: 'Eulma',
        wilaya: 'Setif',
        nomPrenom : 'Ahmed DERADJI',
        img: '/assets/image-profil.jpg',
        post: 'Developpeur',
        diplome: 'licence en informatique',
        competences: 'PHP, REACT JS, ANGULAR',
        experience: '3',
        age:25
    },
    {
        commune: 'Bir-mourad-Rais',
        wilaya: 'Alger',
        nomPrenom : 'Youcef BELKHIR',
        img: '/assets/image-profil.jpg',
        post: 'Project manager',
        diplome: 'MBA en managemet',
        competences: 'management, project managment',
        experience: '2',
        age:25
    }
]


const initialState = {
    cards : Cards
}

const ResponseReducer=(state=initialState, action) => {
    switch (action.type) {
        case 'SET_STATE':
            return { ...state, ...action.payload }
        default:
            return state
    }

}
export default ResponseReducer