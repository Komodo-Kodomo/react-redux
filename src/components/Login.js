import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import axios from "axios";
import { withRouter } from "react-router";

// import { fakeAuth } from "./fakeAuth";

function Login(props) {
  let history = useHistory();
  let location = useLocation();
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  });

  let { from } = location.state || { from: { pathname: "/" } };

  let login = event => {
    event.preventDefault();
    axios
      .post(`https://cobacoba-hayepe.herokuapp.com/user/login`, user)
      .then(result => {
        if (result.status === 200) {
          props.history.push("/");
        }
      })
      .catch(error => console.log(error));
  };
  // fakeAuth.authenticate(() => {
  //   history.replace(from);
  // });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  }

  return (
    <Segment style={{ paddingBottom: "4em", paddingTop: "8em" }} vertical>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450, background: "lightblue" }}>
          <Header as="h2" textAlign="center">
            Log-in to your account
          </Header>
          <Form size="large" onSubmit={login}>
            <Segment stacked>
              <label htmlFor="firstName">First Name</label>

              <label htmlFor="email">Email</label>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <label htmlFor="password">Password</label>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />

              <Button style={{ background: "lightblue" }} fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default withRouter(Login);
