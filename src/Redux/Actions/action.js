import { FETCH_POSTS, LOGIN,DELETE_USER,EDIT_USER,FETCH_EDIT_USER } from './type';
import axios from "axios";


const url = 'http://localhost:3333/profile';

export const FetchList =  GetData => {
    return async (dispatch) => {
     await axios.get(url,GetData).then((result)=>{
            dispatch({
                type: FETCH_POSTS,
                payload: result,
            })
    }).catch(error=>{
        console.log(error)
    })
    }
};


export const login = LoginData => {
    return (dispatch) => {
        axios.post(url,LoginData).then((result)=>{
            dispatch({
                type: LOGIN,
                payload: result,
            })
    }).catch(error=>{
        console.log(error)
    })
    }
};

export const deleteuser = (id) => {
    return async (dispatch) => {
       await axios.delete(`${url}/${id}`).then(()=>{
            dispatch({
                type: DELETE_USER,
                payload: id,
            })
    }).catch(error=>{
        console.log(error)
    })
    }
};


export const EditList =  (id,EditData) => {
    return async (dispatch) => {
     await axios.get(url+id,EditData).then((result)=>{
            dispatch({
                type: FETCH_EDIT_USER,
                payload: result,
            })
    }).catch(error=>{
        console.log(error)
    })
    }
};


// export function edituser(data) {  
//     return async dispatch => {  
//         axios.post(url,data).then((result)=>{
//             dispatch({
//                 type: EDIT_USER,
//                 payload: result,
//             })
//             }).catch(error=>{
//                 console.log(error)
//             })
//     }  
// }; 