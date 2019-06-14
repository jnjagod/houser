module.exports = {
    read: (req, res) => {
        let db = req.app.get('db')
        db.get_houses().then(response => {
            res.sendStatus(200).send(response)
        })
    },

    create: (req, res) => {
        let db = req.app.get('db')
        db.create_house(req.body).then(response => {
            res.sendStatus(200).send(response)
        })
    },

    delete: (req, res) => {
        let db = req.app.get('db')
        let {id} = req.params
        db.delete_house([id]).then(response => {
            res.sendStatus(200).send(response)
        })
    }
}