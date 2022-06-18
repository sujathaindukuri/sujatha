import React, { Component } from 'react';
class CarComponent extends Component {
    constructor()
    {
        super();
        this.state = {
            model: "accord",
            make: "hundai",
            color: "red",  
            year: "2020"
                 }
    }
    handleChange = (event) => {
       
        this.setState({
            color: event.target.value
        });

    }
    render(){
        return(
            <div>
                <h2>This is {this.state.model} model of {this.state.make} make in {this.state.color}color made in {this.state.year} originated from {this.props.origin}</h2>
                <h3>{this.state.color}</h3>
                <input type="text" id="name" name="test" onChange={this.handleChange}/><br>
                </br>
                <button className="colorred" value="red" onClick={this.handleChange}>Red</button>
                <button  className="colorblue"value="blue" onClick={this.handleChange}>blue</button>
                <button className="colorgreen" value="green" onClick={this.handleChange}>green</button>
                </div>
        );
    }
}
    
export default CarComponent;