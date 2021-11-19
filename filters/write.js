module.exports = (text, chemin) => {
var fs = require('fs')
fs.appendFile(chemin,text);
return true;

}