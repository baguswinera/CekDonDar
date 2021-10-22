import React, { Component } from 'react';

import styled from 'styled-components';


const Name = styled.h1`
 color:white;
 font-size: 48px;
 text-align: center;
`

class A extends Component {
   constructor(props) {
      super(props);
      this.state = {
         judul: "TA PRAKTIKUM RPLBK KELOMPOK 17",
         subjudul: "Cek Ketersediaan Darah"
      }
   }
   componentDidMount() {
      alert(`Selamat Datang`)
   }
   render() {
      return (
         <div>
            <header>
               <div>
               <Name>{this.state.judul}</Name>
               <Name>{this.state.subjudul}</Name>
               </div>
            </header>

         </div>
      );
   }
}

export default A;