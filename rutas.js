var format = require('date-format');
format.asString(); //defaults to ISO8601 format and current date.
format.asString(new Date()); //defaults to ISO8601 format
var na = format.asString('yyyy-MM-dd', new Date()); //just the time

console.log(na);