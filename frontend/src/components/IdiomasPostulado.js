import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
const API_CARACHV = process.env.REACT_APP_API_CARACHV;
const API_POSTULADO = process.env.REACT_APP_API_POSTULADO;

export const IdiomasPostulado = () => {
    //componente para la carga de datos formulario de registro de informacion
    //idioma
    const [idiomaPost, setIdiomaPost] = useState('Español')
    const [listIdioma, setListIdioma] = useState([])
    //method GET
    const getIdiomaPost = async () => {
        const res = await fetch(`${API_CARACHV}/idiomas-post`)
        const data = await res.json()
        setListIdioma(data)
    }
    //COMPONENT DID MOUNT
    useEffect(() => {
        getIdiomaPost()
    }, [])

    //nivel de idioma
    const [nivIdiomPost, setNivIdiomPost] = useState('Nativo')
    const [listNivIdioma, setListNivIdioma] = useState([])
    //method GET
    const getNivIdiomaPost = async () => {
        const res = await fetch(`${API_CARACHV}/niv-idiomas`)
        const data = await res.json()
        setListNivIdioma(data)
    }
    //COMPONENT DID MOUNT para el GET
    useEffect(() => {
        getNivIdiomaPost()
    }, [])

    //CRUD info general postulado
    //variables
    const [certifIdiomaPost, setCertifIfiomaPost] = useState(true)
    const [listIdiomaPost, setListIdiomaPost] = useState([])
    const [editingIdioma, setEditingIdioma] = useState(false)
    const [idIdioma, setidIdioma] = useState('')
    //method GET
    const getIdiomasPost = async () => {
        const res = await fetch(`${API_POSTULADO}/idiomas`)
        const data = await res.json()
        setListIdiomaPost(data)
    }
    //COMPONENT DID MOUNT
    useEffect(() => {
        getIdiomasPost()
    }, [])

    //methods POST Y UPDATE
    const handleSubmitIdiomas = async (e) => {
        e.preventDefault()
        if (!editingIdioma) {
            const res = await fetch(`${API_POSTULADO}/idiomas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idioma: idiomaPost,
                    nivelIdioma: nivIdiomPost,
                    tieneCertificado: certifIdiomaPost,
                    usuario: "adminD"
                })
            })
            await res.json()
        } else {
            const res = await fetch(`${API_POSTULADO}/idiomas/${idIdioma}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idioma: idiomaPost,
                    nivelIdioma: nivIdiomPost,
                    tieneCertificado: certifIdiomaPost,
                    usuario: "adminD"
                })
            })
            await res.json()
            setEditingIdioma(false)
            setidIdioma('')
        }

        await getIdiomasPost()
        setIdiomaPost('Español')
        setNivIdiomPost('')
        setCertifIfiomaPost(true)
    }
    //Funcion edit
    const editIdiomas = async (id) => {
        const res = await fetch(`${API_POSTULADO}/idiomas/${id}`)
        const data = await res.json()
        setEditingIdioma(true)
        setidIdioma(id)
        setIdiomaPost(data.idioma)
        setNivIdiomPost(data.nivelIdioma)
        setCertifIfiomaPost(data.tieneCertificado)
    }
    //method DELETE
    const deleteIdiomas = async (id) => {
        const IdiomasResponse = window.confirm('¿Estas seguro de querer eliminar el item selecciondo?')
        if (IdiomasResponse) {
            const res = await fetch(`${API_POSTULADO}/idiomas/${id}`, {
                method: 'DELETE',
            })
            await res.json()
            await getIdiomasPost()
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Form onSubmit={handleSubmitIdiomas} className="card card-body">
                        <FormGroup>
                            <Label for="idioma">Idioma</Label>
                            <Input
                                type="select"
                                className="form-select"
                                name="idioma"
                                id="idioma"
                                onChange={e => setIdiomaPost(e.target.value)}
                                value={idiomaPost}>
                                {listIdioma.map(Idiomas => (
                                    <option
                                        key={Idiomas._id}
                                        value={Idiomas.Idioma}>
                                        {Idiomas.Idioma}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="nivelidioma">Nivel de dominio</Label>
                            <Input
                                type="select"
                                className="form-select"
                                name="nivelidioma"
                                id="nivelidioma"
                                onChange={e => setNivIdiomPost(e.target.value)}
                                value={nivIdiomPost}>
                                {listNivIdioma.map(nivIdiomas => (
                                    <option
                                        key={nivIdiomas._id}
                                        value={nivIdiomas.NivelIdioma}>
                                        {nivIdiomas.NivelIdioma}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="certifidioma">¿Tiene certificado del idioma?</Label>
                            <Input
                                type="select"
                                className="form-select"
                                name="certifidioma"
                                id="certifidioma"
                                onChange={e => setCertifIfiomaPost(e.target.value)}
                                value={certifIdiomaPost}>
                                <option value={certifIdiomaPost}>{certifIdiomaPost ? 'Si' : 'No'}</option>
                                <option value={!certifIdiomaPost}>{!certifIdiomaPost ? 'Si' : 'No'}</option>
                            </Input>
                        </FormGroup>
                        <Button className="btn btn-light btn-outline-primary mt-2">
                            {editingIdioma ? 'Editar' : 'Guardar'}
                        </Button>
                        <div className="mt-3">
                            <Link className="btn btn-outline-warning me-2" to="/hoja-de-vida">Volver</Link>
                            <Link className="btn btn-outline-success ms-2" to="/ExpLaboralPostulados">Siguiente</Link>
                        </div>
                    </Form>

                </div>
                <div className="col-md-8">
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Idioma</th>
                                <th>Nivel de dominio</th>
                                <th>Certificado del idioma</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listIdiomaPost.map(IdiomasPost => (
                                <tr key={IdiomasPost._id}>
                                    <td>{IdiomasPost.idioma}</td>
                                    <td>{IdiomasPost.nivelIdioma}</td>
                                    <td>{IdiomasPost.tieneCertificado ? 'Si' : 'No'}</td>
                                    <td>
                                        <Button
                                            className="btn btn-light btn-outline-warning btn-sm"
                                            onClick={() => editIdiomas(IdiomasPost._id)}
                                        >
                                            Editar
                                        </Button>
                                        <Button
                                            className="btn btn-light btn-outline-danger btn-sm"
                                            onClick={() => deleteIdiomas(IdiomasPost._id)}
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