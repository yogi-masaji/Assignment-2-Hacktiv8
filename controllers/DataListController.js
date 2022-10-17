const fs = require('fs');
const jwt = require('jsonwebtoken');

class DataListController {
    static getDataList(req, res) {
        const rawData = fs.readFileSync('./data/data.json');
        const nameList = JSON.parse(rawData);
        jwt.verify(req.headers['x-access-token'], process.env.JWT_KEY, function (err, decoded) {
            if (err) {
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            }
            res.status(200).send(nameList);
        })   
        // return res.json(nameList);
    }
}

module.exports = DataListController