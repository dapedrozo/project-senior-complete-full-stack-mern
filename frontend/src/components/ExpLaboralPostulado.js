import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import Moment from 'react-moment';
registerLocale('es', es)
setDefaultLocale('es', es)

const API_CARACHV = process.env.REACT_APP_API_CARACHV;
const API_POSTULADO = process.env.REACT_APP_API_POSTULADO;

export const ExpLaboralPostulado = () => {
    //componente para la carga de datos formulario de registro de informacion
    //nivel de estudios
    const [profesionesPost, setProfesionPost] = useState('ing de sistemas')
    const [listProf, setListProf] = useState([])
    //method GET
    const getProfPost = async () => {
        const res = await fetch(`${API_CARACHV}/profesiones-post`)
        const data = await res.json()
        setListProf(data)
    }
    //COMPONENT DID MOUNT
    useEffect(() => {
        getProfPost()
    }, [])

    //CRUD info general postulado
    //variables
    const [nomEmprePost, setNomEmprePost] = useState('')
    const [telEmprePost, setTelEmprePost] = useState('')
    const [labActuEmprePost, setLabActuEmprePost] = useState(false)
    const [fechaInicioPost, setFechaInicioPost] = useState(new Date())
    const [fechaFinalPost, setFechaFinalPost] = useState()
    const [cargoLabPost, setCargoLabPost] = useState('')
    const [funcionesLabPost, setFuncionesLabPost] = useState('')
    const [listExpLaborales, setListExpLaborales] = useState([])
    const [editingExpLaborales, setEditingExpLaborales] = useState(false)
    const [idExpLaborales, setidExpLaborales] = useState('')
    //method GET
    const getExpLaboralPost = async () => {
        const res = await fetch(`${API_POSTULADO}/exp-laboral`)
        const data = await res.json()
        setListExpLaborales(data)
    }
    //COMPONENT DID MOUNT
    useEffect(() => {
        getExpLaboralPost()
    }, [])

    //methods POST Y UPDATE
    const handleSubmitExpLaboral = async (e) => {
        e.preventDefault()
        if (!editingExpLaborales) {
            const res = await fetch(`${API_POSTULADO}/exp-laboral`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombreEmpresa: nomEmprePost,
                    telefonoEmpresa: telEmprePost,
                    trabajaActualEstaEmpresa: labActuEmprePost,
                    fechaInicio: fechaInicioPost,
                    fechaFinalizacion: fechaFinalPost,
                    profesiones: profesionesPost,
                    cargo: cargoLabPost,
                    funcionesLaborales: funcionesLabPost,
                    usuario: "adminD"
                })
            })
            await res.json()
        } else {
            const res = await fetch(`${API_POSTULADO}/exp-laboral/${idExpLaborales}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombreEmpresa: nomEmprePost,
                    telefonoEmpresa: telEmprePost,
                    trabajaActualEstaEmpresa: labActuEmprePost,
                    fechaInicio: fechaInicioPost,
                    fechaFinalizacion: fechaFinalPost,
                    profesiones: profesionesPost,
                    cargo: cargoLabPost,
                    funcionesLaborales: funcionesLabPost,
                    usuario: "adminD"
                })
            })
            await res.json()
            setEditingExpLaborales(false)
            setidExpLaborales('')
        }

        await getExpLaboralPost()
        setNomEmprePost('')
        setTelEmprePost('')
        setLabActuEmprePost(0)
        setFechaInicioPost(new Date())
        setFechaFinalPost()
        setProfesionPost('')
        setCargoLabPost('')
        setFuncionesLabPost('')
    }
    //Funcion edit
    const editExpLab = async (id) => {
        const res = await fetch(`${API_POSTULADO}/exp-laboral/${id}`)
        const data = await res.json()
        setEditingExpLaborales(true)
        setidExpLaborales(id)
        setNomEmprePost(data.nombreEmpresa)
        setTelEmprePost(data.telefonoEmpresa)
        setLabActuEmprePost(data.trabajaActualEstaEmpresa)
        setFechaInicioPost(Date.parse(data.fechaInicio))
        setProfesionPost(data.profesiones)
        setCargoLabPost(data.cargo)
        setFuncionesLabPost(data.funcionesLaborales)
        if (data.fechaFinalizacion) {
            setFechaFinalPost(Date.parse(data.fechaFinalizacion))
        } else {
            setFechaFinalPost(data.fechaFinalizacion)
        }
    }
    //method DELETE
    const deleteExpLab = async (id) => {
        const ExpLabResponse = window.confirm('¿Estas seguro de querer eliminar el item selecciondo?')
        if (ExpLabResponse) {
            const res = await fetch(`${API_POSTULADO}/exp-laboral/${id}`, {
                method: 'DELETE',
            })
            await res.json()
            await getExpLaboralPost()
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Form onSubmit={handleSubmitExpLaboral} className="card card-body">
                        <FormGroup>
                            <Label for="nombreempresa">Nombre de la empresa</Label>
                            <Input
                                type="text"
                                className="form-text mt-2"
                                name="nombreempresa"
                                id="nombreempresa"
                                onChange={e => setNomEmprePost(e.target.value)}
                                value={nomEmprePost}>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="telefonoempresa">Telefono de la empresa</Label>
                            <Input
                                type="text"
                                className="form-text mt-2"
                                name="telefonoempresa"
                                id="telefonoempresa"
                                placeholder="dejar en blanco si es trabajador informal"
                                onChange={e => setTelEmprePost(e.target.value)}
                                value={telEmprePost}>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="labactualempre">¿Trabaja actualmente en esta empresa?</Label>
                            <Input
                                type="select"
                                className="form-select"
                                name="labactualempre"
                                id="labactualempre"
                                onChange={e => setLabActuEmprePost(e.target.value)}
                                value={labActuEmprePost}>
                                <option value={labActuEmprePost}>{labActuEmprePost ? 'Si' : 'No'}</option>
                                <option value={!labActuEmprePost}>{!labActuEmprePost ? 'Si' : 'No'}</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="fechaini">Fecha de inicio</Label>
                            <DatePicker
                                name="fechaini"
                                id="fechaini"
                                className="form-control"
                                selected={fechaInicioPost}
                                onChange={date => setFechaInicioPost(date)}
                                dateFormat="dd/MM/yyyy"
                            />
                        </FormGroup>
                        {labActuEmprePost
                            ?
                            <FormGroup>
                            </FormGroup>
                            :
                            <FormGroup>
                                <Label for="fechafinal">Fecha de finalizacion</Label>
                                <DatePicker
                                    name="fechafinal"
                                    id="fechafinal"
                                    className="form-control"
                                    selected={fechaFinalPost}
                                    onChange={date => setFechaFinalPost(date)}
                                    dateFormat="dd/MM/yyyy"
                                />
                            </FormGroup>
                        }
                         <FormGroup>
                            <Label for="profesion">Profesion</Label>
                            <Input
                                type="select"
                                className="form-select"
                                name="profesion"
                                id="profesion"
                                onChange={e => setProfesionPost(e.target.value)}
                                value={profesionesPost}>
                                {listProf.map(profesiones => (
                                    <option
                                        key={profesiones._id}
                                        value={profesiones.ProfesionPostulado}>
                                        {profesiones.ProfesionPostulado}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="cargo">Cargo</Label>
                            <Input
                                type="text"
                                className="form-text mt-2"
                                name="cargo"
                                id="cargo"
                                onChange={e => setCargoLabPost(e.target.value)}
                                value={cargoLabPost}>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="funcioneslaborales">Describenos las funciones que realizabas</Label>
                            <Input
                                type="textarea"
                                className="form-text mt-2"
                                name="funcioneslaborales"
                                id="funcioneslaborales"
                                onChange={e => setFuncionesLabPost(e.target.value)}
                                value={funcionesLabPost}>
                            </Input>
                        </FormGroup>
                        <Button className="btn btn-light btn-outline-primary mt-2">
                            {editingExpLaborales ? 'Editar' : 'Guardar'}
                        </Button>
                        <div className="mt-3">
                            <Link className="btn btn-outline-warning me-2" to="/hoja-de-vida">Volver</Link>
                        </div>
                    </Form>
                </div>
                <div className="col-md-8">
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Nom. empresa</th>
                                <th>Tel. empresa</th>
                                <th>Trabajo actual</th>
                                <th>Fecha ini.</th>
                                <th>Fecha fin.</th>
                                <th>profesion</th>
                                <th>Cargo</th>
                                <th>Funciones</th>
                                <th>Opc.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listExpLaborales.map(ExpLab => (
                                <tr key={ExpLab._id}>
                                    <td>{ExpLab.nombreEmpresa}</td>
                                    <td>{ExpLab.telefonoEmpresa}</td>
                                    <td>{ExpLab.trabajaActualEstaEmpresa ? 'Si' : 'No'}</td>
                                    <td><Moment format="DD-MM-YYYY">{ExpLab.fechaInicio}</Moment></td>
                                    <td>{ExpLab.fechaFinalizacion ? <Moment format="DD-MM-YYYY">{ExpLab.fechaFinalizacion}</Moment> : 'No'}</td>
                                    <td>{ExpLab.profesiones}</td>
                                    <td>{ExpLab.cargo}</td>
                                    <td>{ExpLab.funcionesLaborales}</td>
                                    <td>
                                        <Button
                                            className="btn btn-light btn-outline-warning btn-sm"
                                            onClick={() => editExpLab(ExpLab._id)}
                                        >
                                            Editar
                                        </Button>
                                        <Button
                                            className="btn btn-light btn-outline-danger btn-sm"
                                            onClick={() => deleteExpLab(ExpLab._id)}
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
