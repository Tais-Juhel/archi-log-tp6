const fs = require('fs')
const FILTERS = require('./config-filters.json')

fs.readdir('./filters', (err, filtersDir) => {
    let validFunction = 0
    filtersDir.forEach(filter => {
        filterF = require('./filters/'+filter)
        if(typeof filterF  == "function") {
            validFunction++
            console.log('OK: '+ validFunction +"/"+ filtersDir.length)
        } else {
            console.log(filter+': No comform filter')
        }
    })
    console.log(filtersDir)
})

try {
    if(typeof FILTERS.steps == 'object' && FILTERS.steps.length !=0) {
        FILTERS.steps["0"]
        console.log(FILTERS.steps)
        Object.entries(FILTERS.steps).forEach(fltr => {
            console.log(fltr)
            require('./filters/'+fltr[1].filter)
            console.log(fltr[1].filter+":")
            if(typeof fltr[1].params == 'object') {
                console.log('OK')
            } else {
                console.log('params must be an array')
            }
        })
    }
} catch (e) {
    console.log("Error")
}