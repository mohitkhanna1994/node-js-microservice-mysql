var config = require('../../config');
var db = require('../util/database');
var pool = db.getPool();

module.exports = function (app, express) {
    var api = express.Router();


    api.get('/users', function (req, res) {
        console.log("working");
        console.log(pool)
        var query ="select * from student";
        pool.getConnection(function (err, connection) {
            if(err)
                return res.send(400)
            connection.query(query, function (err, rows) {
                res.json({type: "success", code: 200, data: rows});
            });
        });

    });

    return api;
};
