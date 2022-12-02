import { get, post, put, destroy} from './index'

export const Users = {
    index: () => get('/posts'),
    signIn: (params) => post('/signin',params),
    logIn: (params) => post('/login',params),
    profileDetailsPost: (params) => post('/profiledetails',params),
    familyDetilsPost: (params) => post('/familydetails',params),
    zodicDetailsPost: (params) => post('/zodic',params),
    getAllDetails: (id) => get('/getalldetails',{ params :{id:id}}),
    postImage: (params) => post('/uploadimages',params),
    getImage:(id) => get('/image', {params: {id:id}}),
    search:(params) => post('/search',params),
    getAllDetails:() => get('/allposts') 
}