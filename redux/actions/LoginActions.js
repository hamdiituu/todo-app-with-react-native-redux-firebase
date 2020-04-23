import * as LoginTypes from '../types/LoginTypes';
import firebaseConfig from '../../firebase/firebaseConfig';
import * as firebase from 'firebase';
// export const loginSuccces =()=>({
//     type:LoginTypes.LOGIN_SUCCES,
//     payload :true
// })

// export const loginFailere =()=>({
//     type:LoginTypes.LOGIN_FAILERE,
//     payload :true
// })


export const doLogin = (email,password)=>{
   return dispatch=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            console.log("Başarılı")
            dispatch({
                type : LoginTypes.LOGIN_SUCCES,
                payload :true
            })
        })
        .catch((err)=>{
            console.log(err)
            dispatch({
                type : LoginTypes.LOGIN_FAILERE,
                payload :true
            })
        })
   }
}