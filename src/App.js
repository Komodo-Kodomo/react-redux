import React from "react";

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  List,
  Menu,
  Segment
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Segment inverted vertical textAlign="center">
        <BrowserRouter>
          <Container as="nav">
            <Menu fixed="top" borderless compact inverted>
              <Menu.Item active>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/todo">To Do</Link>
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
                <Button size="huge">Learn more</Button>
              </Container>
            </Route>
            <Route path="/todo">
              <Container text style={{ marginTop: "7em" }}>
                <Todo />
              </Container>
            </Route>
          </Switch>
        </BrowserRouter>

        <Segment inverted vertical as="footer">
          <Container textAlign="center">
            <List horizontal divide link size="small">
              <p>Project Kelompok Redux @ 2019</p>
            </List>
          </Container>
        </Segment>
      </Segment>
    </div>
  );
}

export default App;
