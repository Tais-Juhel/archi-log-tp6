const fs = require('fs')

fs.readdir('./filters', (err, filtersDir) => {
    filtersDir.forEach(filter => {
        console.log("Filter:",filter)
        filterF = require('./filters/'+filter)
        if(typeof filterF  == "function") {
            filterF("Salut")
            console.log('OK')
        } else {
            console.log('No comform filter')
        }
    })
})