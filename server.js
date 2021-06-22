const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/css'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  })

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}.\nready to refresh browser`)
});