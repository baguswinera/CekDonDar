import React, { Component } from 'react';
import styled from 'styled-components';

const Name = styled.h1`
 color:white;
 font-size: 24px;
 text-align: center;
`

export default class Waktu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tgl: new Date().toLocaleString()
        };
      }
    
      getDate() {
        var date = { currentTime: new Date().toLocaleString() };
    
        this.setState({
          date: date
        });
      }

    
      render() {
        return (
          <div>
          <center>
            <Name> {this.state.tgl}</Name>
          </center>
          <br />
          </div>
        );
      }
}