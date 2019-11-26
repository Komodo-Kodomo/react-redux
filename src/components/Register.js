import React, { Component } from "react";
import { withRouter } from "react-router";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      password: "",
      email: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onRegister = this.onRegister.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onRegister(e) {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`https://cobacoba-hayepe.herokuapp.com/user/register`, this.state)
      .then(result => {
        if (result.status === 200) {
          this.props.history.push("/login");
        }
        this.setState({
          mobileNumber: "",
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          gender: "",
          password: "",
          email: ""
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Segment style={{ paddingBottom: "4em", paddingTop: "8em" }} vertical>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450, background: "lightblue" }}>
            <Header as="h2" textAlign="center">
              Register
            </Header>
            <Form size="large">
              <Segment stacked>
                <label htmlFor="firstName">First Name</label>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="firstName"
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.onChange}
                />
                <label htmlFor="lastName">Last Name</label>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="lastName"
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.onChange}
                />
                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <Form.Input
                  fluid
                  icon="calendar"
                  iconPosition="left"
                  placeholder="dateOfBirth"
                  type="date"
                  name="dateOfBirth"
                  value={this.state.dateOfBirth}
                  onChange={this.onChange}
                />
                <label htmlFor="gender">Gender</label>
                <Form.Input
                  fluid
                  icon="venus mars icon"
                  iconPosition="left"
                  placeholder="Gender"
                  type="text"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                />
                <label htmlFor="mobileNumber">Mobile Number</label>
                <Form.Input
                  fluid
                  icon="phone"
                  iconPosition="left"
                  placeholder="Mobile Number"
                  type="tel"
                  name="mobileNumber"
                  value={this.state.mobileNumber}
                  onChange={this.onChange}
                />
                <label htmlFor="email">Email</label>
                <Form.Input
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="E-mail address"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <label htmlFor="password">Password</label>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />

                <Button
                  style={{ background: "lightblue" }}
                  fluid
                  size="large"
                  onClick={this.onRegister}
                >
                  Submit
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default withRouter(Register);
