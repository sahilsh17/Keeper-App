const express = require('express');
const app = express();
const port = 8000;
app.use('/',(req, res) => {
console.log(req.headers);
res.send('Hello World!');
});
app.listen(port, function(){
console.log(`Server is running at ${port}`);
});