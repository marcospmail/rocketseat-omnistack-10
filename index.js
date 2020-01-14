const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistackuser:lbpAO2Zzb76csLM8@omnistack-erlon.mongodb.net/omnistack10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.post('/users', (req, res) =>{
    return res.json({ message: 'hi'});
})

app.listen(3333);