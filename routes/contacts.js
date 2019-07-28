const express = require('express');

const router = express.Router();

// route : GET api/contacts
// desc : GET all users contacts
// access : Private
router.get('/', (req, res) => {
  res.send('get all contacts');
});

// route : POST api/contacts
// desc : Add new contact
// access : Private
router.get('/', (req, res) => {
  res.send('Add Contact');
});

// route : POST api/contacts/:id
// desc : Update contact
// access : Private
router.put('/:id', (req, res) => {
  res.send('Update Contact');
});

// route : Delete api/contacts/:id
// desc : Delete contact
// access : Private
router.delete('/:id', (req, res) => {
  res.send('Delete Contact');
});

module.exports = router;
