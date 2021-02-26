import React, { Component } from 'react';
import firebase from 'firebase';

class App extends Component{
   constructor(props){
     super(props);
     this.state={
        lista:[],
     }
    let firebaseConfig = {
      apiKey: "AIzaSyAhMDu2fkhx607Y-4aFfX7mrf9iJ81I00M",
      authDomain: "reactudemy-24d1f.firebaseapp.com",
      databaseURL: "https://reactudemy-24d1f-default-rtdb.firebaseio.com",
      projectId: "reactudemy-24d1f",
      storageBucket: "reactudemy-24d1f.appspot.com",
      messagingSenderId: "768025376357",
      appId: "1:768025376357:web:99c5c87fe90cdd99abf88c"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {      
      firebase.initializeApp(firebaseConfig);
  }   
   firebase.database().ref('Usuarios').on('value',(snapshot)=>{
      let estado = this.state;
      estado.lista = [];
      
      snapshot.forEach((filhoItem)=>{
          estado.lista.push({
            id:   filhoItem.key,
            nome: filhoItem.val().nome,
            idade:filhoItem.val().idade, 
          })

      })
      this.setState(estado);//cuidado e precisa setar o estado,
      //para que ocorra mudança e trabalhe fora do escopo ao qual ele esta
    })
   
}
    render(){
      return(
        <div>
        {this.state.lista.map((item)=>{
            return(
              <div key={item.id}>
                <h1>{item.nome}</h1>
                <h3>{item.idade}</h3>
              </div>
            );
        })}
        </div>
      );
    }
}
export default App;