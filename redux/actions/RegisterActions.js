import * as RegisterTypes from '../types/RegisterTypes';
import firebaseConfig from '../../firebase/firebaseConfig';
import * as firebase from 'firebase';

export const doRegister = (email,password,passwordVerify)=>{
   return dispatch=>{

    if(password == passwordVerify){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            console.log("başarılı")
        })
        .catch(()=>{
            console.log("sistemsel hata")
        })
    }
    else{
        console.log("şifreler uyuşuyor.")
    }

    

   }
}