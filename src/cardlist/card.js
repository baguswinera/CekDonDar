import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import '../App.css'
import Gambar1 from "./gambar1.jpg";
import Gambar2 from "./gambar2.png";


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: '#ffffff',
        margin: 20,

    },

});

const Name = styled.h5`
 color:black;
 font-size: 16px;
 text-align: center;
`
const Img = styled.img`
 border-radius: 0%;
 padding: 0px;
 width: 90%;
 margin: 10px;
`
const Table = styled.div
    `
margin: 0px 0px 0px 440px;
width: 50%;
`
const Column = styled.div
    `
 display: table-cell;
 text-align: left;
`
const Row = styled.div
    `
 display: table;
 padding:  0.5em 0.5em;
 width: 80%;
 table-layout: fixed;
 border-spacing: 2px;
`
export default function SimpleCard() {
    const classes = useStyles();

    function CardContent(props) {
        return (
            <div>
                <Img src={props.image} />
                <p>{props.nama}</p>
                <p>{props.nim}</p>

            </div>
        );
    }

    return (
        <div className="wrapper">
            <Table>
                <Row>
                    <Column>
                        <Card className={classes.root}>
                            <Name>
                                <div className="praktikan">
                                    <CardContent nama="Bagus Ramadhan Winera" nim="21120118140081" image={Gambar1} />
                                </div>
                            </Name>
                        </Card>
                    </Column>
                    <Column>
                        <Card className={classes.root}>
                            <Name>
                                <div className="praktikan">
                                    <CardContent nama="Estu Nur Aini" nim="21120118130096" image={Gambar2} />
                                </div>
                            </Name>
                        </Card>
                    </Column>
                </Row>
            </Table>
        </div>
    )
}