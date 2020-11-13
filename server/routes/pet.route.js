const router = require('express').Router()
const PetController = require('../controllers/pet.controller')


router.get("/" , PetController.getAllPets)
router.post("/" , PetController.createPet)
router.put('/:id' , PetController.updatePet)
router.delete('/:id', PetController.deletePet)

module.exports = router