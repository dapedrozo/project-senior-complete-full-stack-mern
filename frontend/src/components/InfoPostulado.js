import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const API_CARACHV = process.env.REACT_APP_API_CARACHV;
const API_POSTULADO = process.env.REACT_APP_API_POSTULADO;

export const InfoPostulado = () => {
    //componente para la carga de datos formulario de registro de informacion
    //estado laboral
    const [estadoLabPost, setEstLabPost] = useState('Ama de Casa')
    const [listEstLab, setListEstLab] = useState([])
    //method GET
    const getEstLabPost = async () => {
        const res = await fetch(`${API_CARACHV}/estado-laboral`)
        const data = await res.json()
        setListEstLab(data)
    }
    //COMPONENT DID MOUNT
    useEffect(() => {
        getEstLabPost()
    }, [])

    //programas de gobierno
    const [progGobPost, setProgGobPost] = useState('Ninguno')
    const [listProgGob, setListProgGob] = useState([])
    //method GET
    const getProgGobPost = async () => {
        const res = await fetch(`${API_CARACHV}/programas-gobierno`)
        const data = await res.json()
        setListProgGob(data)
    }
    //COMPONENT DID MOUNT para el GET
    useEffect(() => {
        getProgGobPost()
    }, [])

    //minimo de rango salarial
    const [minRanSalPost, setMinRanSalPost] = useState(1)
    const [listMinRanSal, setListMinRanSal] = useState([])
    //method GET
    const getMinRanSalPost = async () => {
        const res = await fetch(`${API_CARACHV}/min-rango-salarial`)
        const data = await res.json()
        setListMinRanSal(data)
    }
    //COMPONENT DID MOUNT para el GET
    useEffect(() => {
        getMinRanSalPost()
    }, [])

    //CRUD info general postulado
    //variables
    const [libretaMilitarPost, setLibretaMilitarPost] = useState(true)
    const [perfilLaboralPost, setPerfilLaboralPost] = useState('')
    const [listInfoGen, setListInfoGen] = useState([])
    const [editingInfoGen, setEditingInfoGen] = useState(false)
    const [idInfoGen, setidInfoGen] = useState('')
    //method GET
    const getInfoGenPost = async () => {
        const res = await fetch(`${API_POSTULADO}/info-postulado`)
        const data = await res.json()
        setListInfoGen(data)
    }
    //COMPONENT DID MOUNT
    useEffect(() => {
        getInfoGenPost()
    }, [])

    //methods POST Y UPDATE
    const handleSubmitInfoGen = async (e) => {
        e.preventDefault()
        if (!editingInfoGen) {
            const res = await fetch(`${API_POSTULADO}/info-postulado`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    tieneLibretaMilitar: libretaMilitarPost,
                    estadoLaboral: estadoLabPost,
                    programaGobierno: progGobPost,
                    salarioAspira: minRanSalPost,
                    perfilLaboral: perfilLaboralPost,
                    usuario: "adminD"
                })
            })
            await res.json()
        } else {
            const res = await fetch(`${API_POSTULADO}/info-postulado/${idInfoGen}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    tieneLibretaMilitar: libretaMilitarPost,
                    estadoLaboral: estadoLabPost,
                    programaGobierno: progGobPost,
                    salarioAspira: minRanSalPost,
                    perfilLaboral: perfilLaboralPost,
                    usuario: "adminD"
                })
            })
            await res.json()
            setEditingInfoGen(false)
            setidInfoGen('')
        }

        await getInfoGenPost()
        setLibretaMilitarPost(1)
        setEstLabPost('Ama de Casa')
        setProgGobPost('Ninguno')
        setMinRanSalPost(1)
        setPerfilLaboralPost('')
    }
    //Funcion edit
    const editInfoGen = async (id) => {
        const res = await fetch(`${API_POSTULADO}/info-postulado/${id}`)
        const data = await res.json()
        setEditingInfoGen(true)
        setidInfoGen(id)
        setLibretaMilitarPost(data.tieneLibretaMilitar)
        setEstLabPost(data.estadoLaboral)
        setProgGobPost(data.programaGobierno)
        setMinRanSalPost(data.salarioAspira)
        setPerfilLaboralPost(data.perfilLaboral)
    }
    //method DELETE
    const deleteInfoGen = async (id) => {
        const InfoGenResponse = window.confirm('¿Estas seguro de querer eliminar el item selecciondo?')
        if (InfoGenResponse) {
            const res = await fetch(`${API_POSTULADO}/info-postulado/${id}`, {
                method: 'DELETE',
            })
            await res.json()
            await getInfoGenPost()
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Form onSubmit={handleSubmitInfoGen} className="card card-body">
                        <FormGroup>
                            <Label for="libretamil">Libreta militar</Label>
                            <Input
                                type="select"
                                className="form-select"
                                name="libretamil"
                                id="libretamil"
                                onChange={e => setLibretaMilitarPost(e.target.value)}
                                value={libretaMilitarPost}>
                                <option value={libretaMilitarPost}>{libretaMilitarPost ? 'Si' : 'No'}</option>
                                <option value={!libretaMilitarPost}>{!libretaMilitarPost ? 'Si' : 'No'}</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="estadolaboral">Estado laboral actual</Label>
                            <Input
                                type="select"
                                className="form-select"
                                name="estadolaboral"
                                id="estadolaboral"
                                onChange={e => setEstLabPost(e.target.value)}
                                value={estadoLabPost}>
                                {listEstLab.map(estLab => (
                                    <option
                                        key={estLab._id}
                                        value={estLab.EstadoLaboral}>
                                        {estLab.EstadoLaboral}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="programasgobierno">¿Estás en algun programa de gobierno?</Label>
                            <Input
                                type="select"
                                className="form-select"
                                name="programasgobierno"
                                id="programasgobierno"
                                onChange={e => setProgGobPost(e.target.value)}
                                value={progGobPost}>
                                {listProgGob.map(ProgGob => (
                                    <option
                                        key={ProgGob._id}
                                        value={ProgGob.ProgramasGobierno}>
                                        {ProgGob.ProgramasGobierno}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="minrangosalarial">Minimo salario al que aspira</Label>
                            <Input
                                type="select"
                                className="form-select"
                                name="minrangosalarial"
                                id="minrangosalarial"
                                onChange={e => setMinRanSalPost(e.target.value)}
                                value={minRanSalPost}>
                                {listMinRanSal.map(MinRanSal => (
                                    <option
                                        key={MinRanSal._id}
                                        value={MinRanSal.MinRangoSalarial}>
                                        {MinRanSal.MinRangoSalarial} SMMLV
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="perfillaboral">Describenos tu perfil laboral</Label>
                            <Input
                                type="textarea"
                                className="form-text mt-2"
                                name="perfillaboral"
                                id="perfillaboral"
                                onChange={e => setPerfilLaboralPost(e.target.value)}
                                value={perfilLaboralPost}>
                            </Input>
                        </FormGroup>
                        {listInfoGen.length > 0 && editingInfoGen ?
                            <Button
                                className="btn btn-light btn-outline-primary mt-2"
                            >
                                Editar
                            </Button> :
                            listInfoGen.length === 0 ?
                                <Button
                                    className="btn btn-light btn-outline-primary mt-2"
                                >
                                    Guardar
                                </Button> :
                                <Button
                                    className="btn btn-light btn-outline-primary mt-2"
                                    disabled
                                >
                                    Guardar
                                </Button>
                        }
                        <div className="mt-3">
                            <Link className="btn btn-outline-warning me-2" to="/hoja-de-vida">Volver</Link>
                            <Link className="btn btn-outline-success ms-2" to="/EstudiosPostulados">Siguiente</Link>
                        </div>
                    </Form>

                </div>

                <div className="col-md-8">
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Lib. militar</th>
                                <th>Est. laboral</th>
                                <th>Prog. gobierno</th>
                                <th>Asp. Salarial(SMMLV)</th>
                                <th>Perf. laboral</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listInfoGen.map(infoGen => (
                                <tr key={infoGen._id}>
                                    <td>{infoGen.tieneLibretaMilitar ? 'Si' : 'No'}</td>
                                    <td>{infoGen.estadoLaboral}</td>
                                    <td>{infoGen.programaGobierno}</td>
                                    <td>{infoGen.salarioAspira}</td>
                                    <td>{infoGen.perfilLaboral}</td>
                                    <td>
                                        <Button
                                            className="btn btn-light btn-outline-warning btn-sm"
                                            onClick={() => editInfoGen(infoGen._id)}
                                        >
                                            Editar
                                        </Button>
                                        <Button
                                            className="btn btn-light btn-outline-danger btn-sm"
                                            onClick={() => deleteInfoGen(infoGen._id)}
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
