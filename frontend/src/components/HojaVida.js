import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './custom.css'
import infogeneral from '../assets/infogeneral.jpg'
import estudios from '../assets/estudios.jpg'
import idiomas from '../assets/idiomas.jpg'
import explab from '../assets/explab.jpg'

const cards = [
    {
        id: 1,
        title: 'Info. general',
        image: infogeneral,
        text: 'Ingresa tu informacion general',
        link: '/InfoPostulados',
        button: 'Registrar'
    },
    {
        id: 2,
        title: 'Estudios',
        image: estudios,
        text: 'Ingresa tus estudios',
        link: '/EstudiosPostulados',
        button: 'Registrar'
    },
    {
        id: 3,
        title: 'Idiomas',
        image: idiomas,
        text: 'Ingresa tus idiomas',
        link: '/IdiomasPostulados',
        button: 'Registrar'
    },
    {
        id: 4,
        title: 'Exp. laboral',
        image: explab,
        text: 'Ingresa tus experiencias laborales',
        link: '/ExpLaboralPostulados',
        button: 'Registrar'
    }
]


export default class HojaVida extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        cards.map(card => (
                            <div className="col-md-3" key={card.id}>
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