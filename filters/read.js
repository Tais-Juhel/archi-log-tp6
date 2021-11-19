module.exports = (input) => {
    
    var fs = require('fs');
    
    try {
        const data = fs.readFileSync(input, 'utf8')
        console.log(data)
        return data;
      } catch (err) {
        console.error(err)
      }

}