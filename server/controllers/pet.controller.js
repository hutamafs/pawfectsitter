const { Pet } = require("../models/pet.model");

module.exports.getAllPets = async (req, res,next) => {

    try {
        let pets = await Pet.find({user_id: req.userData.user_id})
        res.status(200).json(pets)
    } catch (next) {
        
    }
}


module.exports.createPet = async ( req, res , next ) => {
    try {
        let pet = new Pet ({
            name : req.body.name,
            image : req.body.image,
            gender : req.body.gender,
            age : req.body.age,
            type : req.body.type,
            user_id : req.userData.id
        })
        await pet.save()
        res.status(201).json(pet)
    } catch (error) {
        res.status(400).send(error)
        next(error)   
    }
    
}

module.exports.updatePet = async ( req, res ,next) => {
    try {    
        let petId = req.params.id
        Pet.findOneAndUpdate(petId , req.body , { new : true })
        .then(pet => {
            return res.status(200).json(pet)
        })
        .catch(err => {
            return res.status(400).send(err)
        })
    } catch (next) {  }
}

module.exports.deletePet = async ( req, res ) => {
    let petId = req.params.id
    await Pet.findByIdAndRemove(petId)
    return res.send('Pet deleted')
}