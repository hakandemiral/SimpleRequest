import React from 'react';
import "./App.css";

import Endpoint from "./components/Endpoint";
import Box from "./components/Box";
import Container from "./components/Container";

import logo from "./assets/logo.svg"
import axios from "axios"

class App extends React.Component{
  state={
    req_type: "get",
      url: "",
      response: "",
      request: null
  };

  sendRequest = () => {
      axios[this.state.req_type](this.state.url, {
          head: {}
      })
          .then(res => this.setState({
              response: {
                  data: JSON.stringify(res.data),
                  status: JSON.stringify(res.status)
              }
          }))
          .catch(err => console.log(err))
  };

  changeState = (type, data) => {
      this.setState({
          [type]: data
      });
  };

  render() {
    return (
        <div className="container">
          <div className="main">
              <div className="head">
                  <img src={logo} alt="Logo" className="logo"/>
              </div>
              <div className="body">
                  <Container>
                      <Endpoint changeState={this.changeState}/>
                  </Container>
                  <Container>
                      <Box label="Request" changeState={this.changeState} type="request"/>
                      <Box label="Response" data={this.state.response.data} readonly={true} type="response"/>
                  </Container>
                  <Container>
                      <div className="send-button" onClick={this.sendRequest}>Send</div>
                  </Container>
              </div>
          </div>
        </div>
    );
  }

};

export default App;
