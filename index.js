const express = require('express')
const mongoose = require('mongoose')
const Profile = require('./models/db')
const app = express()

app.use(express.json()) //midelware

app.get('/', (req, res) => {
    res.send('Hello Node API')
})

app.get('/profile', async(req, res) => {
    try {
        const profiles = await Profile.find({})
        res.status(200).json(profiles)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.get('/profile/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const profile = await Profile.findById(id)
        if(!profile){
            return res.status(404).json({message: `cannot find any product with id ${id}`})
        }
        res.status(200).json(profile)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.post('/profile', async(req, res) => {
    try{
        const profile = await Profile.create(req.body)
        res.status(200).json(profile)
    } catch(error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.put('/profile/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const profile = await Profile.findByIdAndUpdate(id, req.body)
        //we cannot find any product in dataase
        if(!product){
            return res.status(404).json({message: `cannot find any product with id ${id}`})
        }
        const updateprofile = await Profile.findById(id)
        res.status(200).json(updateprofile)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.delete('/profile/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const profile = await Profile.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message: `cannot find any product with id ${id}`})
        }
        // res.status(200).json(product)
        res.send('product deleted')
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.listen(3000, ()=> {
    console.log(`Node API app is running on port 3000`)
})

mongoose.
connect('mongodb://127.0.0.1:27017/chauhan')
.then(() => {
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log(error)
})