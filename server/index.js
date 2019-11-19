const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();
const port = 4540;

app.use(cors());
app.use(bodyParse.json());
app.use(express.static('client/public'));

app.get('/api/coffee', (req, res) => {
  db.getAllCoffee((err, data) => {
    if (err) throw err;
    res.send(data).end();
  });
});

app.get('/api/usercollection/:id', (req, res) => {
  let id = req.params.id;
  // console.log()
  db.getUserColl(id, (err, data) => {
    if (err) throw err;
    res.send(data).end();
  });
});

app.post('/api/usercollection/:id', async (req, res) => {
  let id = req.params.id;
  let exist = false;
  try{
    await db.checkOneUserColl(id, (data) => {
      if (!data.length) {
        db.insertUserColl(id, (err, data) => {
          if (err) throw err;
          res.send(data).end();
        });
      } else res.send('Result exist').end();
    })
  } catch (err) {
    console.log(err);
  }
});

app.delete('/api/usercollection/:id', async (req, res) => {
  let id = req.params.id;
  let exist = false;
  try{
    await db.checkOneUserColl(id, (data) => {
      if (data.length) {
        db.deleteUserColl(id, (err, data) => {
          if (err) throw err;
          res.send(data).end();
        });
      } else res.send('No result').end()
    }
    )
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => console.log(`${Date()} \nListening on port: ${port}`));
