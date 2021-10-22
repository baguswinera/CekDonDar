import {Component} from "react"; 
import React from "react"; 
import A from './component/A';
import Card from './components/card';
import Judul from './component/B';
import Waktu from './component/C';
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
                  <Card />
               </div>
               <div>
                  <Judul />
               </div>
               <div>
                  <Waktu />
               </div>
                <button className="rounded" onClick={this.hilangkan}>{this.state.kompWot ? 'Tutup' : 'Cek Ketersediaan'} </button>
                {this.state.kompWot ? <Tekkom/> : ''}
                </header>
            </div>
            
        )
    }
}