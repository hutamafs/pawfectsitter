const { mongoose } = require("mongoose")
const { Pet } = require("../models/pet.model")

module.exports.getAllPets = async (req, res) => {
    let pets = await Pet.find({})
    return res.send(pets)
}


module.exports.createPet = async ( req, res , next ) => {
    try {
        let pet = new Pet ({
            name : req.body.name,
            image : req.body.image,
            gender : req.body.gender,
            age : req.body.age,
            type : req.body.type
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
    } catch (error) {
        // console.log(error, "INI ERRORRRRRRRRRRRRRR");
        next(error)
    }
}

module.exports.deletePet = async ( req, res ) => {
    let petId = req.params.id
    await Pet.findByIdAndRemove(petId)
    return res.send('Pet deleted')
}