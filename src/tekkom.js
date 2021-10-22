import React, { Component } from "react";
import axios from "axios";
import { Modal, Input } from "antd";
// import { Row, Col, Divider } from 'antd';
import "antd/dist/antd.css";
import modaldetail from "./modaldetail";

import { Card, Button } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'left',
  marginLeft: '70px',
  marginTop: '30px',
  backgroundColor: 'lightgray'
};


export default class tekkom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tekkom: [],
        visible: false,
        nama_buku: "",
        penulis: "",
        tahun: ""
        };
    }
      

    state = {
        komponen :true
    }


    handleButton = (nama_buku, penulis, tahun) => {
        Modal.info({
            title: 'Detail',
            content: (
              <div>
                <p>Nama : {nama_buku} <br />
                Umur : {penulis} <br />
                Golongan Darah : {tahun}
                </p>
              </div>
            ),
            onOk() {},
          });
    };

    handleDelete = (id) => {
        var proceed = window.confirm("Yakin Ingin Menghapus?");
        if (proceed) {
            axios({
                method: "delete",
                url: "https://mmk69.herokuapp.com/data/del/"+id,
                headers: {
                accept: "*/*"
                }
                })
                .then((data) => {
                alert("Berhasil Dihapus");
                window.location.reload();
                })
                .catch(() => {
                alert("Terjadi Kesalahan");
                });
        } else{
            window.location.reload();
        }
    }

    handleTambahOrang = () => {
        this.setState({
        visible: true,
        });
    };

    handleNama = (e) => {
        this.setState({
        nama_buku: e.target.value,
        });
        console.log(this.state.nama_buku);
    };

    handlePublish = (e) => {
        this.setState({
        penulis: e.target.value,
        });
        console.log(this.state.penulis);
    };

    handleTahun = (e) => {
        this.setState({
        tahun: e.target.value,
        });
        console.log(this.state.tahun);
    };

    handleSubmit = () => {
        if (
        this.state.nama_buku !== "" &&
        this.state.penulis !== "" &&
        !this.state.tahun !== ""
        ) {
            axios({
                method: "post",
                url: "https://mmk69.herokuapp.com/data/post",
                headers: {
                accept: "*/*",
                },
                data: {
                nama_buku: this.state.nama_buku,
                penulis: this.state.penulis,
                tahun: this.state.tahun,
                },
            })
            .then((data) => {
            alert("Berhasil Ditambahkan");
            window.location.reload();
            })
            .catch((error) => {
            alert("Terjadi Kesalahan");
            });
        } else {
            alert("Pastikan Semua Kolom Terisi");
        }
    };

    componentDidMount() {
        axios({
            method: "get",
            url: "https://mmk69.herokuapp.com/data",
            headers: {
            accept: "*/*",
            },
        })
        .then((data) => {
            this.setState({
                tekkom: data.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };

    render() {
        return (
        <div>
            <div className="boxWhite" marginBottom="200px">
                <center>
                    <button className="rounded" style={{marginTop: "10px"}} onClick={this.handleTambahOrang}>Tambah</button>
                    <br></br><br/>
                </center>
                <Modal
                    title="Isi Data Berikut :"
                    centered
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    onCancel={() => this.setState({ visible: false })}
                    width={500}
                    >
                        <div style={{ textAlign: "left" }}>
                            <p>Nama : </p>{" "}
                                <Input
                                type="text"
                                placeholder="Nama"
                                onChange={this.handleNama}
                                />
                                <br />
                                <br />
                            <p>Umur : </p>{" "}
                                <Input type="text" placeholder="Umur" onChange={this.handlePublish} />
                                <br />
                                <br />
                            <p>Golongan Darah : </p>{" "}
                                <Input
                                type="text"
                                placeholder="Golongan Darah"
                                onChange={this.handleTahun}
                                />
                                <br />
                                <br />
                        </div>
                </Modal>
            
                {this.state.tekkom.map((results, index) => {
                return (                    
                    <Card.Grid className="rounded" style={gridStyle} key={results.nama_buku}>
                        <h5 className="card-title">Nama : {results.nama_buku}</h5>
                        <h5 className="card-title">Umur : {results.penulis}</h5>
                        <h5 className="card-title">Golongan Darah : {results.tahun}</h5>
                        <Button type="primary" onClick={() => this.handleButton(results.nama_buku, results.penulis, results.tahun)}>Detail</Button>
                            
                        <Button style={{marginLeft: "5px"}} type="danger" onClick={() => this.handleDelete(results._id)}>Hapus</Button>
                    </Card.Grid>
                    
                    );
                })}
               
            </div>
        </div>
        );
    }
}