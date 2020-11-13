const router = require('express').Router()
const PetController = require('../controllers/pet.controller');
const upload = require('../helpers/aws');


router.get("/" , PetController.getAllPets)
router.post("/" , upload.single('image') , PetController.createPet)
router.put('/:id' , PetController.updatePet)
router.delete('/:id', PetController.deletePet)

module.exports = router