function validateFields(req, res, next) {
    const { gender, firstname, city, email, cell } = req.body

    if (gender && firstname && city && email && cell) {
        next()
    } else {
        res.status(400).json({ message: 'Please check the fields' })
    }
}

module.exports = {
    validateFields
}