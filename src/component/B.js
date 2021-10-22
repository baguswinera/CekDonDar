import React, { Component } from 'react';

import styled from 'styled-components';


const Name = styled.h2`
 color:white;
 font-size: 42px;
 text-align: center;
`

export default class B extends Component {
    constructor(props){
        super(props)
        this.state = {
          program: "null"
        }
      }


      render() {
        return (
          <div>

            <Name>Berikut adalah Stok Ketersediaan Darah</Name>

          </div>
        );
      }
}