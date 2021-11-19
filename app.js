const fs = require('fs')

fs.readdir('./filters', (err, filtersDir) => {
    filtersDir.forEach(filter => {
        console.log("Filter:",filter)
        if(typeof require('./filters/'+filter) == "function") {
            console.log('OK')
        } else {
            console.log('No comform filter')
        }
    })
})