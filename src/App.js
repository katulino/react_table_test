import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabulka from './tabulka/tabulka';
import FetchData from './tabulka/FetchData';


class App extends React.Component {
  constructor(props) {
        super(props);
        this.state = { hlavicka : ["ID", "Příjmení", "Nick","email", "město", "ulice"],
	               vstup:[],
                       fetchData: [],
                       loading: true,
		       ukazFormPromenna: false,
		       novyUzivatel: null
        					  }
        this.novyUz = novyUzivatel => {this.setState({ novyUzivatel       												});        											}
        this.removeRadek = this.removeRadek.bind(this);
        this.ukazFormFunkce = this.ukazFormFunkce.bind(this);
        this.pridejUzivatele = this.pridejUzivatele.bind(this);
        this.editUzivatele = this.editUzivatele.bind(this);
        					  
    }
    async componentDidMount() {
          const url = "https://jsonplaceholder.typicode.com/users";
          const response = await fetch(url);
          const data = await response.json();
          const PN = []
          for (const person of data){
              PN.push([person.name,person.username,person.email,person.address.city,person.address.street])
              }

          this.setState({ vstup: PN, fetchData: data, loading: false });
          }
    render() {
       if (this.state.loading) {
       return <div>loading data...</div>;
        }

       if (!this.state.fetchData) {
       return <div>didn't get data</div>;
       }

      console.log(this.state.vstup)

      const tabulka = <Tabulka hlavicka={this.state.hlavicka}
                               telo={this.state.vstup}
      			       smazat={this.removeRadek}
      			       ukazForm={this.state.ukazFormPromenna}
      			       formFunkce={this.ukazFormFunkce}
      			       pridatFunkce={this.pridejUzivatele}
      			       editFunkce={this.editUzivatele}/>
        		
   return (
   <div className="App">
   	<div className="App-header">
       	<img src={logo} className="App-logo" alt="logo" /> 
          <h2>React example table</h2>
      </div>
     		{tabulka}
    </div>
    );
  }
  removeRadek(ID) {
  	var i=0
  	var a= []
  	for (const radek of this.state.vstup ) {      						
        i=i+1
        if (i !== ID) {
        		a.push(radek)
        }
        			}  
   this.setState({
     vstup: this.state.vstup = a 
      	
  });
		console.log(`mažu ted ${ID}`);
    }
    
   editUzivatele(ID,radekZmeny) {
   	var i=0
  		var a= []
  		for (const radek of this.state.vstup ) {      						
        i=i+1
        if (i !== ID) {
        		a.push(radek)
        }
        else {a.push(radekZmeny)}
        			}  
   this.setState({
     vstup: this.state.vstup = a 
      	
  });
		console.log(`mažu ted ${ID}`);
    }
   
   
   ukazFormFunkce() {
   	var a = false
   	if (this.state.ukazFormPromenna == false) {
   		a = true;
   	}
   this.setState({
     ukazFormPridat: this.state.ukazFormPromenna = a 
      	
  });
		console.log(`ukazu formular`);
    }
    
   pridejUzivatele(NU) {
   	console.log(`pridam ve vstupu ${NU}`) 
   	var a = this.state.vstup
   	a.push(NU)      	
   this.setState({
     		vstup: this.state.vstup = a  	
  					});
		console.log(`pridam ${NU}`);
    }
 }

export default App;
