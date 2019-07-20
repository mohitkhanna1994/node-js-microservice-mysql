var mysql = require('mysql');
var pool;
module.exports = {
    getPool: function () {
        if (pool) return pool;
        pool = mysql.createPool({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'root',
            database: 'student'
        });
        return pool;
    }
};