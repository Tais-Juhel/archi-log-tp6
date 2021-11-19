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
    if(typeof FILTERS.steps == 'Array' && FILTERS.steps.length !=0) {
        FILTERS.steps["0"]
        FILTERS.steps.forEach(fltr => {
            const filterF = require('./filters'+fltr.filter)
            console.log(fltr.filter+":")
            if(typeof fltr.params == 'Array') {
                console.log('OK')
            } else {
                console.log('param must be an array')
            }
        })
    }
} catch (e) {
    console.log("Error")
}