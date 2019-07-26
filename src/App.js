import React, { Component } from 'react';
import LogoCard from "./components/LogoCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import logos from "./logo.json";
import './App.css';


class App extends Component {
  state = {
    logos
  };

  render() {
    const {image,id,name} = logo;
    return (
      <Wrapper>
      <Title> Clicky Game </Title>
      {this.state.logos.map(logo => (
        <LogoCard
        id={id}
        key={id}
        name={name}
        image={image}
        />
      ))}
      </Wrapper>
    );
  }
}

export default App;
