import {Component} from "react"; 
import React from "react"; 
import A from './component/1';
import Card from './cardlist/card';
import Judul from './component/2';
import Waktu from './component/3';
import Tekkom from './tekkom';

export default class Mount extends Component{
    state = {
        kompUtama : true,
        kompWot : false
    }

    hilangkan = ()=>{
        this.setState((state)=>{
            return {kompWot : !this.state.kompWot}
        })
    }

    render(){
        return (
            <div>
                 <header className="App-header">
                <div>
                {this.state.kompUtama ? <A/> : ''}
                </div>
                <div>
                  <Waktu />
               </div>
               <div>
                  <Card />
               </div>
               <div>
                  <Judul />
               </div>
                <button className="rounded" onClick={this.hilangkan}>{this.state.kompWot ? 'Tutup' : 'Cek Ketersediaan'} </button>
                {this.state.kompWot ? <Tekkom/> : ''}
                </header>
            </div>
            
        )
    }
}