import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import MainDashboard from './components/MainDashboard'
import HojaVida from './components/HojaVida'
import {InfoPostulado} from './components/InfoPostulado'
import {EstudiosPostulado} from './components/EstudiosPostulado'
import {IdiomasPostulado} from './components/IdiomasPostulado'
import {ExpLaboralPostulado} from './components/ExpLaboralPostulado'
import GeneralFilter from './components/GeneralFilter'
import {CaractHV} from './components/CaractHV'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="container p-2">
        <div className="App">
        <Switch>
        <Route exact path="/" component={MainDashboard} />
        <Route exact path="/hoja-de-vida" component={HojaVida} />
        <Route path="/InfoPostulados" component={InfoPostulado} />
        <Route path="/EstudiosPostulados" component={EstudiosPostulado} />
        <Route path="/IdiomasPostulados" component={IdiomasPostulado} />
        <Route path="/ExpLaboralPostulados" component={ExpLaboralPostulado} />
        <Route path="/FiltroGeneralPostulados" component={GeneralFilter} />
        <Route path="/Caracteristicas-HV" component={CaractHV} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
