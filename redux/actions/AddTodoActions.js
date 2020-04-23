import * as AddTodoTypes from '../types/AddTodoTypes';
import * as firebase from 'firebase';
// export const loginSuccces =()=>({
//     type:LoginTypes.LOGIN_SUCCES,
//     payload :true
// })

// export const loginFailere =()=>({
//     type:LoginTypes.LOGIN_FAILERE,
//     payload :true
// })


export const addTodo = (newTodo)=>{
   return dispatch=>{
    console.log(newTodo)
    firebase.auth().onAuthStateChanged((user)=>{
       
        firebase.database().ref().child("todos/" + user.uid).push({
            todo:newTodo
        })

    })
   }
}