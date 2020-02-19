import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "../components/layout/Navbar";
import PokemonCardsContainer from "../containers/PokemonCardsContainer";
import PokemonCaughtCardsContainer from "../containers/PokemonCaughtCardsContainer";
import PokemonProfileContainer from "../containers/PokemonProfileContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={PokemonCardsContainer} />
          <Route path='/pokemon/:id' component={PokemonProfileContainer} />
          <Route exact path='/caught' component={PokemonCaughtCardsContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
