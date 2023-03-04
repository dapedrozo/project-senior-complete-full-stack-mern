import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import Moment from 'react-moment';
import { waitFor } from '@testing-library/dom';
registerLocale('es', es)
setDefaultLocale('es', es)

const API_CARACHV = process.env.REACT_APP_API_CARACHV;
const API_POSTULADO = process.env.REACT_APP_API_POSTULADO;

export const EstudiosPostulado = () => {
    //componente para la carga de datos formulario de registro de informacion
    //nivel de estudios
    const [nivelEstPost, setNivEstPost] = useState('Educacion Media')
    const [listNivEst, setListNivEst] = useState([])
    //method GET
    const getNivEstPost = async () => {
        const res = await fetch(`${API_CARACHV}/nivel-estudios`)
        const data = await res.json()
        setListNivEst(data)
    }
    //COMPONENT DID MOUNT
    useEffect(() => {
        getNivEstPost()
    }, [])
    //nivel de escolaridad aprobado
    const [nivEscAproPost, setNivEscAproPost] = useState(1)
    const [listNivEscApro, setListNivEscApro] = useState([])
    //method GET
    const getNivEscAproPost = async () => {
        const res = await fetch(`${API_CARACHV}/nivel-esc-aprobado`)
        const data = await res.json()
        setListNivEscApro(data)
    }
    //COMPONENT DID MOUNT para el GET
    useEffect(() => {
        getNivEscAproPost()
    }, [])
    //definicion nivel de estudios
    const [defNivEstPost, setDefNivEstPost] = useState('Años')
    const [listDefNivEst, setListDefNivEst] = useState([])
    //method GET
    const getDefNivEstPost = async () => {
        const res = await fetch(`${API_CARACHV}/def-niv-estudio`)
        const data = await res.json()
        setListDefNivEst(data)
    }
    //COMPONENT DID MOUNT para el GET
    useEffect(() => {
        getDefNivEstPost()
    }, [])

    //CRUD info general postulado
    //variables
    const [tituloObtenidoPost, setTituloObtenidoPost] = useState('')
    const [nomInstEduPost, setNomInstEduPost] = useState('')
    const [titExtranjPost, setTitExtranjPost] = useState(false)
    const [estFinaliPost, setEstFinaliPost] = useState(false)
    const [fechaInicioPost, setFechaInicioPost] = useState(new Date())
    const [fechaFinalPost, setFechaFinalPost] = useState()
    const [listEstudios, setListEstudios] = useState([])
    const [editingEstudios, setEditingEstudios] = useState(false)
    const [idEstudios, setidEstudios] = useState('')
    //method GET
    const getEstudiosPost = async () => {
        const res = await fetch(`${API_POSTULADO}/estudios`)
        const data = await res.json()
        setListEstudios(data)
    }
    //COMPONENT DID MOUNT
    useEffect(() => {
        getEstudiosPost()
    }, [])
    waitFor(10000)

    //methods POST Y UPDATE
    const handleSubmitEstudios = async (e) => {
        e.preventDefault()
        if (!editingEstudios) {
            const res = await fetch(`${API_POSTULADO}/estudios`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombreTitulo: tituloObtenidoPost,
                    nivelEstudio: nivelEstPost,
                    nivelEscolaridadAprobado: nivEscAproPost,
                    definicionNivel: defNivEstPost,
                    nombreInstituEducativa: nomInstEduPost,
                    esExtranjero: titExtranjPost,
                    finalizado: estFinaliPost,
                    fechaInicio: fechaInicioPost,
                    fechaGrado: fechaFinalPost,
                    usuario: "adminD"
                })
            })
            await res.json()
        } else {
            const res = await fetch(`${API_POSTULADO}/estudios/${idEstudios}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombreTitulo: tituloObtenidoPost,
                    nivelEstudio: nivelEstPost,
                    nivelEscolaridadAprobado: nivEscAproPost,
                    definicionNivel: defNivEstPost,
                    nombreInstituEducativa: nomInstEduPost,
                    esExtranjero: titExtranjPost,
                    finalizado: estFinaliPost,
                    fechaInicio: fechaInicioPost,
                    fechaGrado: fechaFinalPost,
                    usuario: "adminD"
                })
            })
            await res.json()
            setEditingEstudios(false)
            setidEstudios('')
        }

        await getEstudiosPost()
        setTituloObtenidoPost('')
        setNivEstPost('Educacion Media')
        setNivEscAproPost(1)
        setDefNivEstPost('Años')
        setNomInstEduPost('')
        setTitExtranjPost(0)
        setEstFinaliPost(0)
        setFechaInicioPost(new Date())
        setEstFinaliPost()
    }
    //Funcion edit
    const editEstudios = async (id) => {
        const res = await fetch(`${API_POSTULADO}/estudios/${id}`)
        const data = await res.json()
        setEditingEstudios(true)
        setidEstudios(id)
        setTituloObtenidoPost(data.nombreTitulo)
        setNivEstPost(data.nivelEstudio)
        setNivEscAproPost(data.nivelEscolaridadAprobado)
        setDefNivEstPost(data.definicionNivel)
        setNomInstEduPost(data.nombreInstituEducativa)
        setTitExtranjPost(data.esExtranjero)
        setEstFinaliPost(data.finalizado)
        setFechaInicioPost(Date.parse(data.fechaInicio))
        if (data.fechaGrado) {
            setFechaFinalPost(Date.parse(data.fechaGrado))
        } else {
            setFechaFinalPost(data.fechaGrado)
        }
    }
    //method DELETE
    const deleteEstudios = async (id) => {
        const EstudiosResponse = window.confirm('¿Estas seguro de querer eliminar el item selecciondo?')
        if (EstudiosResponse) {
            const res = await fetch(`${API_POSTULADO}/estudios/${id}`, {
                method: 'DELETE',
            })
            await res.json()
            await getEstudiosPost()
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Form onSubmit={handleSubmitEstudios} className="card card-body">
                        <FormGroup>
                            <Label for="tituloobtenido">Titulo obtenido</Label>
                            <Input
                                type="text"
                                className="form-text mt-2"
                                name="tituloobtenido"
                                id="tituloobtenido"
                                onChange={e => setTituloObtenidoPost(e.target.value)}
                                value={tituloObtenidoPost}>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="nivelestudio">Nivel de estudio</Label>
                            <Input
                                type="select"
                                className="form-select"
                                name="nivelestudio"
                                id="nivelestudio"
                                onChange={e => setNivEstPost(e.target.value)}
                                value={nivelEstPost}>
                                {listNivEst.map(nivEst => (
                                    <option
                                        key={nivEst._id}
                                        value={nivEst.NivelEstudio}>
                                        {nivEst.NivelEstudio}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="nombreinstitucion">Nombre de la institucion educativa</Label>
                            <Input
                                type="text"
                                className="form-text mt-2"
                                name="nombreinstitucion"
                                id="nombreinstitucion"
                                onChange={e => setNomInstEduPost(e.target.value)}
                                value={nomInstEduPost}>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="extranjero">¿Titulo extranjero?</Label>
                            <Input
                                type="select"
                                className="form-select"
                                name="extranjero"
                                id="extranjero"
                                onChange={e => setTitExtranjPost(e.target.value)}
                                value={titExtranjPost}>
                                <option value={titExtranjPost}>{titExtranjPost ? 'Si' : 'No'}</option>
                                <option value={!titExtranjPost}>{!titExtranjPost ? 'Si' : 'No'}</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="estfinalizado">¿Estudio finalizado?</Label>
                            <Input
                                type="select"
                                className="form-select"
                                name="estfinalizado"
                                id="estfinalizado"
                                onChange={e => setEstFinaliPost(e.target.value)}
                                value={estFinaliPost}>
                                <option value={estFinaliPost}>{estFinaliPost ? 'Si' : 'No'}</option>
                                <option value={!estFinaliPost}>{!estFinaliPost ? 'Si' : 'No'}</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="fechainicio">Fecha de inicio</Label>
                            <DatePicker
                                name="fechainicio"
                                id="fechainicio"
                                className="form-control"
                                selected={fechaInicioPost}
                                onChange={date => setFechaInicioPost(date)}
                                dateFormat="dd/MM/yyyy"
                                placeholderText={"introduce una fecha valida"}
                            />
                        </FormGroup>
                        {estFinaliPost
                            ?
                            <FormGroup>
                                <Label for="fechafinal">Fecha de grado</Label>
                                <DatePicker
                                    name="fechafinal"
                                    id="fechafinal"
                                    className="form-control"
                                    selected={fechaFinalPost}
                                    onChange={date => setFechaFinalPost(date)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText={"introduce una fecha valida"}
                                />
                            </FormGroup>
                            :
                            <FormGroup>
                            </FormGroup>
                        }
                        <FormGroup>
                            <Label for="definicionniveles">Periodos academicos</Label>
                            <Input
                                type="select"
                                className="form-select"
                                name="definicionniveles"
                                id="definicionniveles"
                                onChange={e => setDefNivEstPost(e.target.value)}
                                value={defNivEstPost}>
                                {listDefNivEst.map(defNiv => (
                                    <option
                                        key={defNiv._id}
                                        value={defNiv.DefinicionNivelEstudio}>
                                        {defNiv.DefinicionNivelEstudio}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="nivelaprobado">Niveles de escolaridad aprobados</Label>
                            <Input
                                type="select"
                                className="form-select"
                                name="nivelaprobado"
                                id="nivelaprobado"
                                onChange={e => setNivEscAproPost(e.target.value)}
                                value={nivEscAproPost}>
                                {listNivEscApro.map(escApro => (
                                    <option
                                        key={escApro._id}
                                        value={escApro.NivelEscolaridadAprobado}>
                                        {escApro.NivelEscolaridadAprobado}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        <Button className="btn btn-light btn-outline-primary mt-2">
                            {editingEstudios ? 'Editar' : 'Guardar'}
                        </Button>
                        <div className="mt-3">
                            <Link className="btn btn-outline-warning me-2" to="/hoja-de-vida">Volver</Link>
                            <Link className="btn btn-outline-success ms-2" to="/IdiomasPostulados">Siguiente</Link>
                        </div>
                    </Form>

                </div>
                <div className="col-md-8">
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Niv. de estudio</th>
                                <th>Institucion educativa</th>
                                <th>Titulo extranjero</th>
                                <th>Finalizado</th>
                                <th>Fecha Ini.</th>
                                <th>Fecha Gra.</th>
                                <th>Periodos</th>
                                <th>Niv. aprobados</th>
                                <th>Opc.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listEstudios.map(Estudio => (
                                <tr key={Estudio._id}>
                                    <td>{Estudio.nombreTitulo}</td>
                                    <td>{Estudio.nivelEstudio}</td>
                                    <td>{Estudio.nombreInstituEducativa}</td>
                                    <td>{Estudio.esExtranjero ? 'Si' : 'No'}</td>
                                    <td>{Estudio.finalizado ? 'Si' : 'No'}</td>
                                    <td><Moment format="DD-MM-YYYY">{Estudio.fechaInicio}</Moment></td>
                                    <td>{Estudio.fechaGrado ? <Moment format="DD-MM-YYYY">{Estudio.fechaGrado}</Moment> : 'No'}</td>
                                    <td>{Estudio.definicionNivel}</td>
                                    <td>{Estudio.nivelEscolaridadAprobado}</td>
                                    <td>
                                        <Button
                                            className="btn btn-light btn-outline-warning btn-sm"
                                            onClick={() => editEstudios(Estudio._id)}
                                        >
                                            Editar
                                        </Button>
                                        <Button
                                            className="btn btn-light btn-outline-danger btn-sm"
                                            onClick={() => deleteEstudios(Estudio._id)}
                                        >
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
