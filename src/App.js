import React, { Component } from "react"
import './App.css';

class App extends Component {

  state = {
    dogs: [
      { name: "Tulio", breed: "Chiwawa", age: "5 years" },
      { name: "Pipoca", breed: "SRD", age: "9 years" },
      { name: "Spike", breed: "Pastor", age: "2 years" }
    ],
    cats: [
      { name: "Oliver", breed: "angorá", age: "10 years" },
      { name: "Lola", breed: "persa", age: "12 years" },
      { name: "Garfield", breed: "malandro", age: "7 years" }
    ],
    display: []
  }
  
  displayDogs = () => {
    this.setState({
      display: this.state.dogs.map((item) => (
        <ul className="Dogs">
          <li>Nome: {item.name} </li>
          <li>Idade: {item.age} </li>
          <li>Raça: {item.breed} </li>
        </ul>
      ))
    });
  };

  displayCats = () => {
    this.setState({
      display: this.state.cats.map((item) => (
        <ul className="Cats">
          <li>Nome: {item.name} </li>
          <li>Idade: {item.age} </li>
          <li>Raça: {item.breed} </li>
        </ul>
      ))
    });
  };

  
  render(){
    return(
      <div className="MainBox">
        <header>
      <h1>Amigão 2.0</h1>

      <nav>
        <ul className="TopNavbar">
          <li>Home</li>
          <li>Sobre</li>
          <li>Adote</li>
          <li>Seja Voluntário</li>
        </ul>
      </nav>

      </header>
      <main>
        <section className="FirstAdoption">
         <h2>Nos ajude se puder!</h2>

        <div className="TripleButtons">
         <button><a href="https://www.suipa.org.br/index.asp?pg=comoajudar.asp" target="_blank">Fazer doação</a>
         </button>
         
         <button>Adotar um pet!</button>

         </div>

         </section>

         <section className="About">
         <h2>Sobre nós!</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non velit id urna aliquam gravida. Duis rhoncus venenatis justo, a blandit dui euismod a.</p>

         <p>Curabitur at vulputate arcu. Integer justo ex, mollis vel mollis eu, rhoncus nec elit. Donec pretium fermentum justo vel sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
         
         <button onClick={this.displayDogs}>Saiba sobre os dogs que te aguardam aqui!</button>
         {this.state.display}
         <button onClick={this.displayCats}>Saiba sobre os gatos que te aguardam aqui!</button>
        
         </section>
        
      </main>
      <footer>
        <section className="Contact">
        <h3>amigao@email.com.br</h3>
        <h3>Rua Rodrigues Alves, n5</h3>
        <h3>Rio de Janeiro, RJ</h3>
        </section>
      <nav>
        <ul className="BottomNavbar">
          <li>Home</li>
          <li>Sobre</li>
          <li>Adote</li>
          <li>Seja Voluntário</li>
        </ul>
      </nav>
      </footer>
      </div>
    )
  }
}

export default App;