const { Console } = require("console");
const { URL } = require('url');

const URLString = "https://www.google.com?search=nodejs";
const parsedUrl = new URL(URLString);

console.log(parsedUrl.protocol); 
console.log(parsedUrl.host);     
console.log(parsedUrl.search);   

parsedUrl.host = "www.laplateforme.io";
parsedUrl.search = "?lang=fr";

console.log(parsedUrl.href);    



