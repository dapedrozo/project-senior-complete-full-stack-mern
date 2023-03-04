import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './custom.css'
import empleo from '../assets/empleo.jpg'
import banca from '../assets/banca.jpg'


const cards = [
    {
        id: 1,
        title: 'Empleo',
        image: empleo,
        text: 'Ingresa al programa Empleo, postulate y accede al buscador de empleo oficial del IMEBU',
        link: '/hoja-de-vida',
        button: 'Postulate'
    },
    {
        id: 2,
        title: 'Banca',
        image: banca,
        text: 'Ingresa al programa Banca, postulate y accede a creditos en el menor tiempo posible',
        link: '!#',
        button: 'Postulate'
    }
]


export default class MainDashboard extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        cards.map(card => (
                            <div className="col-md-4" key={card.id}>
                                <div className="card text-center card-propia animate__animated animate__fadeInUp">
                                    <div className="overflow">
                                    <img src={card.image} alt="" className="card-img-top"/> 
                                    </div>
                                    <div className="card-body card-body-propia">
                                        <h2>{card.title}</h2>
                                        <p className="card-text card-text-propia">{card.text}</p>
                                        <Link className="btn btn-outline-primary" to={card.link}>{card.button}</Link>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        )
    }
}
