const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE bicicletas (id TEXT PRIMARY KEY, name TEXT, description TEXT, price REAL)");
});

module.exports = db;
