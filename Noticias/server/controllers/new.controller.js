const model = require('../models/model')

const newCtrl = {}

newCtrl.getNews = async (req, res) => {
    const News = await model.find()
    res.json(News)
}

newCtrl.getNew = async (req, res) => {
    console.log(req.params)

    const New = await model.findById(req.params.id)

    res.json(New)
}

newCtrl.createNew = async (req, res) => {
    const New = new model(req.body)
    await New.save()
    console.log(New)
    res.json({
        status: 'New saved'
    })
}

newCtrl.editNew = async (req, res) => {
    const { id } = req.params
    const New = {
        title: req.params.title,
        description: req.params.description,
        author: req.params.author,
        place: req.params.place,
        date: req.params.date,
        image: req.params.image
    }

    await model.findByIdAndUpdate(id, { $set: New }, { new: true })

    res.json({
        status: 'New updated'
    })
}

newCtrl.removeNew = async (req, res) => {
    await model.findByIdAndDelete(req.params.id)
    res.json({
        status: 'New removed'
    })
}

module.exports = newCtrl