import React from "react";

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Container, Header, Menu, Segment, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
// import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container as="nav">
          <Menu fixed="top" borderless compact inverted>
            <Menu.Item active>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/register">Register</Link>
            </Menu.Item>
          </Menu>
        </Container>

        <Switch>
          <Route exact path="/">
            <Container className="content">
              <Header inverted as="h1">
                Project Redux Kelompok
              </Header>
              <p>About To Do wtih axios and react-redux</p>
            </Container>
          </Route>
          <Route path="/login">
            <Container text>
              <Login />
            </Container>
          </Route>
          <Route path="/register">
            <Container text>
              <Register />
            </Container>
          </Route>
        </Switch>
      </BrowserRouter>

      <Segment
        vertical
        inverted
        style={{ padding: "1em 0em", fontWeight: 600 }}
      >
        <Container textAlign="center">
          <List horizontal divided link size="small">
            <p>copyright @ 2019 by Komodo-Kodomo</p>
          </List>
        </Container>
      </Segment>
    </div>
  );
}

export default App;
