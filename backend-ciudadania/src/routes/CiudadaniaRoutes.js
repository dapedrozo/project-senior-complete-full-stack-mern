const {Router} = require('express');
const router = Router();
const ciudadaniaCtrl = require('../controllers/CiudadaniaController');

//rutas informacion general ciudadania
router.route('/get-ciudadania')
    .get(ciudadaniaCtrl.AllUsersCiudadania)

router.route('/signUp-ciudadania')
    .get(ciudadaniaCtrl.signUpCiudadanoTemplate)    
    .post(ciudadaniaCtrl.signUpCiudadano)

router.route('/signIn-ciudadania')
    .get(ciudadaniaCtrl.signInCiudadanoTemplate)
    .post(ciudadaniaCtrl.signInCiudadano)

router.route('/delete-persona/:id')
    .delete(ciudadaniaCtrl.DeleteUser)


module.exports = router;