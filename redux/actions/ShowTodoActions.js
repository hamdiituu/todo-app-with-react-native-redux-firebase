import * as ShowTodoTypes from '../types/ShowTodoTypes';
import * as firebase from 'firebase';

export const showTodos = ()=>{
   return dispatch=>{
      console.log("show todo")
      firebase.auth().onAuthStateChanged((user)=>{
      var todos =[];
       var data = firebase.database().ref().child("todos/" + user.uid)
       .once('value',function(snapshot){
       var data = snapshot
       console.log(data)
       data.forEach(function(item){
         var todo ={
             "id": item.key,
             "todo" : item.val().todo
             
          }
          todos.push(todo)
       })
       })
         console.log(todos)
     })
    

   }
}