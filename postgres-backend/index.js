const express = require('express')
const app = express()
const port = 3001

const user_model = require('./userModel')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://130.209.243.228:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/users', (req, res) => {
  user_model.getUsers()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/addusers', (req, res) => {
  user_model.createUser(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.delete('/users/:id', (req, res) => {
  user_model.deleteUser(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  user_model
    .updateUser(id, body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/questions', (req, res) => {
  user_model.getQuestions()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/addquestions', (req, res) => {
  user_model.createQuestion(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
