const kucaController = require('express').Router()
const Kuca = require("../models/Kuca")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

kucaController.post('/signup', async (req, res) => {
    try {
        
        const hashedKey = await bcrypt.hash(req.body.key, 10)
        const newKuca = await Kuca.create({...req.body, key: hashedKey})

        const {key, ...others} = newKuca._doc
        const token = jwt.sign({id: newKuca._id}, process.env.JWT_SECRET, {expiresIn: '5h'})

        return res.status(201).json({kuca: others, token})
    } catch (error) {
        return res.status(500).json(error)
    }
})

kucaController.post('/login', async (req, res) => {
    try {
        const kuca = await Kuca.findOne({key: req.body.key})
        if(!kuca){
            throw new Error("Invalid credentials")
        }

        const comparePass = await bcrypt.compare(req.body.key, user.key)
        if(!comparePass){
            throw new Error("Invalid credentials")
        }

        const {key, ...others} = user._doc
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '5h'})        

        return res.status(200).json({user: others, token})
    } catch (error) {
        return res.status(500).json(error) 
    }
})

module.exports = kucaController