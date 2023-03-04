import React, { useState, useEffect } from 'react'
import { UncontrolledCollapse, Button, Form, FormGroup, Label, Input } from 'reactstrap';
const API_CARACHV = process.env.REACT_APP_API_CARACHV;

export const CaractHV = () => { 
    //CRUD estado laboral postulado
    //variables
    const [estadoLabPost, setEstLabPost] = useState('')
    const [listEstLab, setListEstLab] = useState([])
    const [editingEstLab, setEditingEstLab] = useState(false)
    const [idEstLab, setidEstLab] = useState('')
    //method GET
    const getEstLabPost = async () => {
        const res = await fetch(`${API_CARACHV}/estado-laboral`)
        const data = await res.json()
        setListEstLab(data)
    }
    //COMPONENT DID MOUNT para el GET
    useEffect(() => {
        getEstLabPost()
    }, [])

    //methods POST Y UPDATE
    const handleSubmitEstLab = async (e) => {
        e.preventDefault()
        if(!editingEstLab){
            const res = await fetch(`${API_CARACHV}/estado-laboral`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    EstadoLaboral: estadoLabPost,
                    user: "adminD"
                })
            })
            await res.json()
        } else{
            const res = await fetch(`${API_CARACHV}/estado-laboral/${idEstLab}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    EstadoLaboral: estadoLabPost,
                    user: "adminD"
                })
            })
            await res.json()
            setEditingEstLab(false)
            setidEstLab('')
        }

        await getEstLabPost()
        setEstLabPost('')
    }
    //Funcion edit
    const editEstLab = async (id) => {
        const res = await fetch(`${API_CARACHV}/estado-laboral/${id}`)
        const data = await res.json()
        setEditingEstLab(true)
        setidEstLab(id)
        setEstLabPost(data.EstadoLaboral)
    }
    //method DELETE
    const deleteEstLab = async (id) => {
        const EstLabResponse = window.confirm('¿Estas seguro de querer eliminar el item selecciondo?')
        if(EstLabResponse){
            const res = await fetch(`${API_CARACHV}/estado-laboral/${id}`,{
                method: 'DELETE',
            })
            await res.json()
            await getEstLabPost()
        }
    }

    //CRUD programa gobierno postulado
    //variables
    const [progGobPost, setProgGobPost] = useState('')
    const [listProgGob, setListProgGob] = useState([])
    const [editingProgGob, setEditingProgGob] = useState(false)
    const [idProgGob, setidProgGob] = useState('')
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

    //methods POST Y UPDATE
    const handleSubmitProgGob = async (e) => {
        e.preventDefault()
        if(!editingProgGob){
            const res = await fetch(`${API_CARACHV}/programas-gobierno`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ProgramasGobierno: progGobPost,
                    user: "adminD"
                })
            })
            await res.json()
        } else{
            const res = await fetch(`${API_CARACHV}/programas-gobierno/${idProgGob}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ProgramasGobierno: progGobPost,
                    user: "adminD"
                })
            })
            await res.json()
            setEditingProgGob(false)
            setidProgGob('')
        }

        await getProgGobPost()
        setProgGobPost('')
    }
    //Funcion edit
    const editProgGob = async (id) => {
        const res = await fetch(`${API_CARACHV}/programas-gobierno/${id}`)
        const data = await res.json()
        setEditingProgGob(true)
        setidProgGob(id)
        setProgGobPost(data.ProgramasGobierno)
    }
    //method DELETE
    const deleteProgGob = async (id) => {
        const ProgGobResponse = window.confirm('¿Estas seguro de querer eliminar el item selecciondo?')
        if(ProgGobResponse){
            const res = await fetch(`${API_CARACHV}/programas-gobierno/${id}`,{
                method: 'DELETE',
            })
            await res.json()
            await getProgGobPost()
        }
    }

    //CRUD minimo de rango salarial postulado
    //variables
    const [minRanSalPost, setMinRanSalPost] = useState('')
    const [listMinRanSal, setListMinRanSal] = useState([])
    const [editingMinRanSal, setEditingMinRanSal] = useState(false)
    const [idMinRanSal, setidMinRanSal] = useState('')
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

    //methods POST Y UPDATE
    const handleSubmitMinRanSal = async (e) => {
        e.preventDefault()
        if(!editingMinRanSal){
            const res = await fetch(`${API_CARACHV}/min-rango-salarial`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    MinRangoSalarial: minRanSalPost,
                    user: "adminD"
                })
            })
            await res.json()
        } else{
            const res = await fetch(`${API_CARACHV}/min-rango-salarial/${idMinRanSal}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    MinRangoSalarial: minRanSalPost,
                    user: "adminD"
                })
            })
            await res.json()
            setEditingMinRanSal(false)
            setidMinRanSal('')
        }

        await getMinRanSalPost()
        setMinRanSalPost('')
    }
    //Funcion edit
    const editMinRanSal = async (id) => {
        const res = await fetch(`${API_CARACHV}/min-rango-salarial/${id}`)
        const data = await res.json()
        setEditingMinRanSal(true)
        setidMinRanSal(id)
        setMinRanSalPost(data.MinRangoSalarial)
    }
    //method DELETE
    const deleteMinRanSal = async (id) => {
        const MinRanSalResponse = window.confirm('¿Estas seguro de querer eliminar el item selecciondo?')
        if(MinRanSalResponse){
            const res = await fetch(`${API_CARACHV}/min-rango-salarial/${id}`,{
                method: 'DELETE',
            })
            await res.json()
            await getMinRanSalPost()
        }
    }

    //CRUD nivel de estudio postulado
    //variables
    const [nivelEstPost, setNivEstPost] = useState('')
    const [listNivEst, setListNivEst] = useState([])
    const [editingNivEst, setEditingNivEst] = useState(false)
    const [idNivEst, setidNivEst] = useState('')
    //method GET
    const getNivEstPost = async () => {
        const res = await fetch(`${API_CARACHV}/nivel-estudios`)
        const data = await res.json()
        setListNivEst(data)
    }
    //COMPONENT DID MOUNT para el GET
    useEffect(() => {
        getNivEstPost()
    }, [])

    //methods POST Y UPDATE
    const handleSubmitNivEst = async (e) => {
        e.preventDefault()
        if(!editingNivEst){
            const res = await fetch(`${API_CARACHV}/nivel-estudios`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    NivelEstudio: nivelEstPost,
                    user: "adminD"
                })
            })
            await res.json()
        } else{
            const res = await fetch(`${API_CARACHV}/nivel-estudios/${idNivEst}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    NivelEstudio: nivelEstPost,
                    user: "adminD"
                })
            })
            await res.json()
            setEditingNivEst(false)
            setidNivEst('')
        }

        await getNivEstPost()
        setNivEstPost('')
    }
    //Funcion edit
    const editNivEst = async (id) => {
        const res = await fetch(`${API_CARACHV}/nivel-estudios/${id}`)
        const data = await res.json()
        setEditingNivEst(true)
        setidNivEst(id)
        setNivEstPost(data.NivelEstudio)
    }
    //method DELETE
    const deleteNivEst = async (id) => {
        const NivEstResponse = window.confirm('¿Estas seguro de querer eliminar el item selecciondo?')
        if(NivEstResponse){
            const res = await fetch(`${API_CARACHV}/nivel-estudios/${id}`,{
                method: 'DELETE',
            })
            await res.json()
            await getNivEstPost()
        }
    }

    //CRUD nivel de escolaridad aprobado postulado
    //variables
    const [nivEscAproPost, setNivEscAproPost] = useState('')
    const [listNivEscApro, setListNivEscApro] = useState([])
    const [editingNivEscApro, setEditingNivEscApro] = useState(false)
    const [idNivEscApro, setidNivEscApro] = useState('')
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
    //methods POST Y UPDATE
    const handleSubmitNivEscApro = async (e) => {
        e.preventDefault()
        if(!editingNivEscApro){
            const res = await fetch(`${API_CARACHV}/nivel-esc-aprobado`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    NivelEscolaridadAprobado: nivEscAproPost,
                    user: "adminD"
                })
            })
            await res.json()
        } else{
            const res = await fetch(`${API_CARACHV}/nivel-esc-aprobado/${idNivEscApro}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    NivelEscolaridadAprobado: nivEscAproPost,
                    user: "adminD"
                })
            })
            await res.json()
            setEditingNivEscApro(false)
            setidNivEscApro('')
        }

        await getNivEscAproPost()
        setNivEscAproPost('')
    }
    //Funcion edit
    const editNivEscApro = async (id) => {
        const res = await fetch(`${API_CARACHV}/nivel-esc-aprobado/${id}`)
        const data = await res.json()
        setEditingNivEscApro(true)
        setidNivEscApro(id)
        setNivEscAproPost(data.NivelEscolaridadAprobado)
    }
    //method DELETE
    const deleteNivEscApro = async (id) => {
        const NivEscAproResponse = window.confirm('¿Estas seguro de querer eliminar el item selecciondo?')
        if(NivEscAproResponse){
            const res = await fetch(`${API_CARACHV}/nivel-esc-aprobado/${id}`,{
                method: 'DELETE',
            })
            await res.json()
            await getNivEscAproPost()
        }
    }

    //CRUD definicion de niveles postulado
    //variables
    const [defNivEstPost, setDefNivEstPost] = useState('')
    const [listDefNivEst, setListDefNivEst] = useState([])
    const [editingDefNivEst, setEditingDefNivEst] = useState(false)
    const [idDefNivEst, setidDefNivEst] = useState('')
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
    //methods POST Y UPDATE
    const handleSubmitDefNivEst = async (e) => {
        e.preventDefault()
        if(!editingDefNivEst){
            const res = await fetch(`${API_CARACHV}/def-niv-estudio`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    DefinicionNivelEstudio: defNivEstPost,
                    user: "adminD"
                })
            })
            await res.json()
        } else{
            const res = await fetch(`${API_CARACHV}/def-niv-estudio/${idDefNivEst}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    DefinicionNivelEstudio: defNivEstPost,
                    user: "adminD"
                })
            })
            await res.json()
            setEditingDefNivEst(false)
            setidDefNivEst('')
        }

        await getDefNivEstPost()
        setDefNivEstPost('')
    }
    //Funcion edit
    const editDefNivEst = async (id) => {
        const res = await fetch(`${API_CARACHV}/def-niv-estudio/${id}`)
        const data = await res.json()
        setEditingDefNivEst(true)
        setidDefNivEst(id)
        setDefNivEstPost(data.DefinicionNivelEstudio)
    }
    //method DELETE
    const deleteDefNivEst = async (id) => {
        const DefNivEstResponse = window.confirm('¿Estas seguro de querer eliminar el item selecciondo?')
        if(DefNivEstResponse){
            const res = await fetch(`${API_CARACHV}/def-niv-estudio/${id}`,{
                method: 'DELETE',
            })
            await res.json()
            await getDefNivEstPost()
        }
    }

    //CRUD profesiones postulado
    //variables
    const [profesionPost, setProfePost] = useState('')
    const [listProf, setListProf] = useState([])
    const [editingProf, setEditingProf] = useState(false)
    const [idProf, setidProf] = useState('')
    //method GET
    const getProfPost = async () => {
        const res = await fetch(`${API_CARACHV}/profesiones-post`)
        const data = await res.json()
        setListProf(data)
    }
    //COMPONENT DID MOUNT para el GET
    useEffect(() => {
        getProfPost()
    }, [])
    //methods POST Y UPDATE
    const handleSubmitProf = async (e) => {
        e.preventDefault()
        if(!editingProf){
            const res = await fetch(`${API_CARACHV}/profesiones-post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ProfesionPostulado: profesionPost,
                    user: "adminD"
                })
            })
            await res.json()
        } else{
            const res = await fetch(`${API_CARACHV}/profesiones-post/${idProf}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ProfesionPostulado: profesionPost,
                    user: "adminD"
                })
            })
            await res.json()
            setEditingProf(false)
            setidProf('')
        }

        await getProfPost()
        setProfePost('')
    }
    //Funcion edit
    const editProf = async (id) => {
        const res = await fetch(`${API_CARACHV}/profesiones-post/${id}`)
        const data = await res.json()
        setEditingProf(true)
        setidProf(id)
        setProfePost(data.ProfesionPostulado)
    }
    //method DELETE
    const deleteProf = async (id) => {
        const ProfResponse = window.confirm('¿Estas seguro de querer eliminar el item selecciondo?')
        if(ProfResponse){
            const res = await fetch(`${API_CARACHV}/profesiones-post/${id}`,{
                method: 'DELETE',
            })
            await res.json()
            await getProfPost()
        }
    }

    //CRUD nivel de idiomas postulado
    //variables
    const [nivIdiomPost, setNivIdiomPost] = useState('')
    const [listNivIdioma, setListNivIdioma] = useState([])
    const [editingNivIdioma, setEditingNivIdioma] = useState(false)
    const [idNivIdioma, setidNivIdioma] = useState('')
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
    //methods POST Y UPDATE
    const handleSubmitNivIdioma = async (e) => {
        e.preventDefault()
        if(!editingNivIdioma){
            const res = await fetch(`${API_CARACHV}/niv-idiomas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    NivelIdioma: nivIdiomPost,
                    user: "adminD"
                })
            })
            await res.json()
        } else{
            const res = await fetch(`${API_CARACHV}/niv-idiomas/${idNivIdioma}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    NivelIdioma: nivIdiomPost,
                    user: "adminD"
                })
            })
            await res.json()
            setEditingNivIdioma(false)
            setidNivIdioma('')
        }

        await getNivIdiomaPost()
        setNivIdiomPost('')
    }
    //Funcion edit
    const editNivIdioma = async (id) => {
        const res = await fetch(`${API_CARACHV}/niv-idiomas/${id}`)
        const data = await res.json()
        setEditingNivIdioma(true)
        setidNivIdioma(id)
        setNivIdiomPost(data.NivelIdioma)
    }
    //method DELETE
    const deleteNivIdioma = async (id) => {
        const NivIdiomaResponse = window.confirm('¿Estas seguro de querer eliminar el item selecciondo?')
        if(NivIdiomaResponse){
            const res = await fetch(`${API_CARACHV}/niv-idiomas/${id}`,{
                method: 'DELETE',
            })
            await res.json()
            await getNivIdiomaPost()
        }
    }

    //CRUD idiomas postulado
    //variables
    const [idiomaPost, setIdiomaPost] = useState('')
    const [listIdioma, setListIdioma] = useState([])
    const [editingIdioma, setEditingIdioma] = useState(false)
    const [idIdioma, setidIdioma] = useState('')
    //method GET
    const getIdiomaPost = async () => {
        const res = await fetch(`${API_CARACHV}/idiomas-post`)
        const data = await res.json()
        setListIdioma(data)
    }
    //COMPONENT DID MOUNT para el GET
    useEffect(() => {
        getIdiomaPost()
    }, [])
    //methods POST Y UPDATE
    const handleSubmitIdioma = async (e) => {
        e.preventDefault()
        if(!editingIdioma){
            const res = await fetch(`${API_CARACHV}/idiomas-post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Idioma: idiomaPost,
                    user: "adminD"
                })
            })
            await res.json()
        } else{
            const res = await fetch(`${API_CARACHV}/idiomas-post/${idIdioma}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Idioma: idiomaPost,
                    user: "adminD"
                })
            })
            await res.json()
            setEditingIdioma(false)
            setidIdioma('')
        }

        await getIdiomaPost()
        setIdiomaPost('')
    }
    //Funcion edit
    const editIdioma = async (id) => {
        const res = await fetch(`${API_CARACHV}/idiomas-post/${id}`)
        const data = await res.json()
        setEditingIdioma(true)
        setidIdioma(id)
        setIdiomaPost(data.Idioma)
    }
    //method DELETE
    const deleteIdioma = async (id) => {
        const IdiomaResponse = window.confirm('¿Estas seguro de querer eliminar el item selecciondo?')
        if(IdiomaResponse){
            const res = await fetch(`${API_CARACHV}/idiomas-post/${id}`,{
                method: 'DELETE',
            })
            await res.json()
            await getIdiomaPost()
        }
    }

    return (
        <div>
            <div className="row pt-5">
                <Button
                    outline color="primary"
                    id="infoGenPost"
                    style={{ marginBottom: '1rem' }}
                    className="col-md-12">
                    Informacion General Postulado
                </Button>
                <UncontrolledCollapse toggler="#infoGenPost">
                    <div className="row pt-3">
                        <div className="col-md-4">
                            <Form onSubmit={handleSubmitEstLab} className="card card-body">
                                <FormGroup>
                                    <Label for="estadoLabPost">Estado laboral del postulado</Label>
                                    <Input
                                        type="text"
                                        className="form-text mt-2"
                                        name="estadoLabPost"
                                        id="estadoLabPost"
                                        onChange={e => setEstLabPost(e.target.value)}
                                        value={estadoLabPost}>
                                    </Input>
                                </FormGroup>
                                <Button
                                    className="btn btn-light btn-outline-primary mt-2">
                                    {editingEstLab ? 'Editar' : 'Guardar'}
                                </Button>
                            </Form>
                        </div>
                        <div className="col-md-8">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Estado laboral</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listEstLab.map(estLab => (
                                        <tr key={estLab._id}>
                                            <td>{estLab.EstadoLaboral}</td>
                                            <td>
                                                <Button
                                                    className="btn btn-light btn-outline-warning btn-sm"
                                                    onClick={() => editEstLab(estLab._id)}
                                                >
                                                    Editar
                                                </Button>
                                                <Button
                                                    className="btn btn-light btn-outline-danger btn-sm"
                                                    onClick={() => deleteEstLab(estLab._id)}
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
                    <div className="row pt-3">
                        <div className="col-md-4">
                            <Form onSubmit={handleSubmitProgGob} className="card card-body">
                                <FormGroup>
                                    <Label for="progGobPost">Programas de gobierno del postulado</Label>
                                    <Input
                                        type="text"
                                        className="form-text mt-2"
                                        name="progGobPost"
                                        id="progGobPost"
                                        onChange={e => setProgGobPost(e.target.value)}
                                        value={progGobPost}>
                                    </Input>
                                </FormGroup>
                                <Button
                                    className="btn btn-light btn-outline-primary mt-2">
                                    {editingProgGob ? 'Editar' : 'Guardar'}
                                </Button>
                            </Form>
                        </div>
                        <div className="col-md-8">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Programas de gobierno</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {listProgGob.map(progGob => (
                                        <tr key={progGob._id}>
                                            <td>{progGob.ProgramasGobierno}</td>
                                            <td>
                                                <Button
                                                    className="btn btn-light btn-outline-warning btn-sm"
                                                    onClick={() => editProgGob(progGob._id)}
                                                >
                                                    Editar
                                                </Button>
                                                <Button
                                                    className="btn btn-light btn-outline-danger btn-sm"
                                                    onClick={() => deleteProgGob(progGob._id)}
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
                    <div className="row pt-3 pb-3">
                        <div className="col-md-4">
                            <Form onSubmit={handleSubmitMinRanSal} className="card card-body">
                                <FormGroup>
                                    <Label for="minRanSalPost">Minimo de rango salarial del postulado</Label>
                                    <Input
                                        type="text"
                                        className="form-text mt-2"
                                        name="minRanSalPost"
                                        id="minRanSalPost"
                                        onChange={e => setMinRanSalPost(e.target.value)}
                                        value={minRanSalPost}>
                                    </Input>
                                </FormGroup>
                                <Button
                                    className="btn btn-light btn-outline-primary mt-2">
                                    {editingMinRanSal ? 'Editar' : 'Guardar'}
                                </Button>
                            </Form>
                        </div>
                        <div className="col-md-8">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Minimo de rango salarial del postulado</th>
                                        <th className="text-center">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {listMinRanSal.map(minRanSal => (
                                        <tr key={minRanSal._id}>
                                            <td>{minRanSal.MinRangoSalarial}</td>
                                            <td>
                                                <Button
                                                    className="btn btn-light btn-outline-warning btn-sm"
                                                    onClick={() => editMinRanSal(minRanSal._id)}
                                                >
                                                    Editar
                                                </Button>
                                                <Button
                                                    className="btn btn-light btn-outline-danger btn-sm"
                                                    onClick={() => deleteMinRanSal(minRanSal._id)}
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
                </UncontrolledCollapse>
            </div>

            <div className="row pt-3">
                <Button
                    outline color="primary"
                    id="infoEstPost"
                    style={{ marginBottom: '1rem' }}
                    className="col-md-12">
                    Informacion Estudios Postulado
                </Button>
                <UncontrolledCollapse toggler="#infoEstPost">
                    <div className="row pt-3">
                        <div className="col-md-4">
                            <Form onSubmit={handleSubmitNivEst} className="card card-body">
                                <FormGroup>
                                    <Label for="nivelEstPost">Nivel de estudio del postulado</Label>
                                    <Input
                                        type="text"
                                        className="form-text mt-2"
                                        name="nivelEstPost"
                                        id="nivelEstPost"
                                        onChange={e => setNivEstPost(e.target.value)}
                                        value={nivelEstPost}>
                                    </Input>
                                </FormGroup>
                                <Button
                                    className="btn btn-light btn-outline-primary mt-2">
                                    {editingNivEst ? 'Editar' : 'Guardar'}
                                </Button>
                            </Form>
                        </div>
                        <div className="col-md-8">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Nivel de estudio del postulado</th>
                                        <th className="text-center">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {listNivEst.map(NivEst => (
                                        <tr key={NivEst._id}>
                                            <td>{NivEst.NivelEstudio}</td>
                                            <td>
                                                <Button
                                                    className="btn btn-light btn-outline-warning btn-sm"
                                                    onClick={() => editNivEst(NivEst._id)}
                                                >
                                                    Editar
                                                </Button>
                                                <Button
                                                    className="btn btn-light btn-outline-danger btn-sm"
                                                    onClick={() => deleteNivEst(NivEst._id)}
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
                    <div className="row pt-3">
                        <div className="col-md-4">
                            <Form onSubmit={handleSubmitNivEscApro} className="card card-body">
                                <FormGroup>
                                    <Label for="nivEscAproPost">Nivel de escolaridad aprobado</Label>
                                    <Input
                                        type="text"
                                        className="form-text mt-2"
                                        name="nivEscAproPost"
                                        id="nivEscAproPost"
                                        onChange={e => setNivEscAproPost(e.target.value)}
                                        value={nivEscAproPost}>
                                    </Input>
                                </FormGroup>
                                <Button
                                    className="btn btn-light btn-outline-primary mt-2">
                                    {editingNivEscApro ? 'Editar' : 'Guardar'}
                                </Button>
                            </Form>
                        </div>
                        <div className="col-md-8">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Nivel de escolaridad aprobado</th>
                                        <th className="text-center">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {listNivEscApro.map(NivEscApro => (
                                        <tr key={NivEscApro._id}>
                                            <td>{NivEscApro.NivelEscolaridadAprobado}</td>
                                            <td>
                                                <Button
                                                    className="btn btn-light btn-outline-warning btn-sm"
                                                    onClick={() => editNivEscApro(NivEscApro._id)}
                                                >
                                                    Editar
                                                </Button>
                                                <Button
                                                    className="btn btn-light btn-outline-danger btn-sm"
                                                    onClick={() => deleteNivEscApro(NivEscApro._id)}
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
                    <div className="row pt-3 pb-3">
                        <div className="col-md-4">
                            <Form onSubmit={handleSubmitDefNivEst} className="card card-body">
                                <FormGroup>
                                    <Label for="defNivEstPost">Definicion nivel de estudio</Label>
                                    <Input
                                        type="text"
                                        className="form-text mt-2"
                                        name="defNivEstPost"
                                        id="defNivEstPost"
                                        onChange={e => setDefNivEstPost(e.target.value)}
                                        value={defNivEstPost}>
                                    </Input>
                                </FormGroup>
                                <Button
                                    className="btn btn-light btn-outline-primary mt-2">
                                    {editingDefNivEst ? 'Editar' : 'Guardar'}
                                </Button>
                            </Form>
                        </div>
                        <div className="col-md-8">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Definicion nivel de estudio</th>
                                        <th className="text-center">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {listDefNivEst.map(DefNivEst => (
                                        <tr key={DefNivEst._id}>
                                            <td>{DefNivEst.DefinicionNivelEstudio}</td>
                                            <td>
                                                <Button
                                                    className="btn btn-light btn-outline-warning btn-sm"
                                                    onClick={() => editDefNivEst(DefNivEst._id)}
                                                >
                                                    Editar
                                                </Button>
                                                <Button
                                                    className="btn btn-light btn-outline-danger btn-sm"
                                                    onClick={() => deleteDefNivEst(DefNivEst._id)}
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
                </UncontrolledCollapse>
            </div>

            <div className="row pt-3">
                <Button
                    outline color="primary"
                    id="infoExpLabPost"
                    style={{ marginBottom: '1rem' }}
                    className="col-md-12">
                    Informacion Experiencia Laboral Postulado
                </Button>
                <UncontrolledCollapse toggler="#infoExpLabPost">
                    <div className="row pt-3 pb-3">
                        <div className="col-md-4">
                            <Form onSubmit={handleSubmitProf} className="card card-body">
                                <FormGroup>
                                    <Label for="profesionPost">Profesion</Label>
                                    <Input
                                        type="text"
                                        className="form-text mt-2"
                                        name="profesionPost"
                                        id="profesionPost"
                                        onChange={e => setProfePost(e.target.value)}
                                        value={profesionPost}>
                                    </Input>
                                </FormGroup>
                                <Button
                                    className="btn btn-light btn-outline-primary mt-2">
                                    {editingProf ? 'Editar' : 'Guardar'}
                                </Button>
                            </Form>
                        </div>
                        <div className="col-md-8">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Profesion</th>
                                        <th className="text-center">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {listProf.map(Prof => (
                                        <tr key={Prof._id}>
                                            <td>{Prof.ProfesionPostulado}</td>
                                            <td>
                                                <Button
                                                    className="btn btn-light btn-outline-warning btn-sm"
                                                    onClick={() => editProf(Prof._id)}
                                                >
                                                    Editar
                                                </Button>
                                                <Button
                                                    className="btn btn-light btn-outline-danger btn-sm"
                                                    onClick={() => deleteProf(Prof._id)}
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
                </UncontrolledCollapse>
            </div>

            <div className="row pt-3">
                <Button
                    outline color="primary"
                    id="infoIdiomasPost"
                    style={{ marginBottom: '1rem' }}
                    className="col-md-12">
                    Informacion Idiomas Postulado
                </Button>
                <UncontrolledCollapse toggler="#infoIdiomasPost">
                    <div className="row pt-3">
                        <div className="col-md-4">
                            <Form onSubmit={handleSubmitNivIdioma} className="card card-body">
                                <FormGroup>
                                    <Label for="nivIdiomPost">Nivel de idioma</Label>
                                    <Input
                                        type="text"
                                        className="form-text mt-2"
                                        name="nivIdiomPost"
                                        id="nivIdiomPost"
                                        onChange={e => setNivIdiomPost(e.target.value)}
                                        value={nivIdiomPost}>
                                    </Input>
                                </FormGroup>
                                <Button
                                    className="btn btn-light btn-outline-primary mt-2">
                                    {editingNivIdioma ? 'Editar' : 'Guardar'}
                                </Button>
                            </Form>
                        </div>
                        <div className="col-md-8">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Nivel de idioma</th>
                                        <th className="text-center">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {listNivIdioma.map(NivIdiom => (
                                        <tr key={NivIdiom._id}>
                                            <td>{NivIdiom.NivelIdioma}</td>
                                            <td>
                                                <Button
                                                    className="btn btn-light btn-outline-warning btn-sm"
                                                    onClick={() => editNivIdioma(NivIdiom._id)}
                                                >
                                                    Editar
                                                </Button>
                                                <Button
                                                    className="btn btn-light btn-outline-danger btn-sm"
                                                    onClick={() => deleteNivIdioma(NivIdiom._id)}
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
                    <div className="row pt-3 pb-3">
                        <div className="col-md-4">
                            <Form onSubmit={handleSubmitIdioma} className="card card-body">
                                <FormGroup>
                                    <Label for="idiomaPost">Idiomas</Label>
                                    <Input
                                        type="text"
                                        className="form-text mt-2"
                                        name="idiomaPost"
                                        id="idiomaPost"
                                        onChange={e => setIdiomaPost(e.target.value)}
                                        value={idiomaPost}>
                                    </Input>
                                </FormGroup>
                                <Button
                                    className="btn btn-light btn-outline-primary mt-2">
                                    {editingIdioma ? 'Editar' : 'Guardar'}
                                </Button>
                            </Form>
                        </div>
                        <div className="col-md-8">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Idiomas</th>
                                        <th className="text-center">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {listIdioma.map(Idiom => (
                                        <tr key={Idiom._id}>
                                            <td>{Idiom.Idioma}</td>
                                            <td>
                                                <Button
                                                    className="btn btn-light btn-outline-warning btn-sm"
                                                    onClick={() => editIdioma(Idiom._id)}
                                                >
                                                    Editar
                                                </Button>
                                                <Button
                                                    className="btn btn-light btn-outline-danger btn-sm"
                                                    onClick={() => deleteIdioma(Idiom._id)}
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
                </UncontrolledCollapse>
            </div>

        </div>
    )
}

