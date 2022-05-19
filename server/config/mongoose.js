const mongoose = require("mongoose");

module.exports = (DB) => {
    mongoose.connect(`mongodb://127.0.0.1/${DB}`)
        .then(() => console.log(`... is it me your looking for?  Conncted to the ${DB} db!  YAY!`))
        .catch(err => console.log(`... Uh-oh!  Can't connect to the ${DB} db!  NO!`, err));
}
