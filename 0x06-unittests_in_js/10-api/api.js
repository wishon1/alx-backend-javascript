/**
 * A simple Express server for a payment system.
 *
 * This server provides several routes for handling payment-related
 * requests:
 * - GET /: Responds with a welcome message.
 * - GET /cart/:id: Responds with available payment methods for a
 * specific cart identified by an ID.
 * - GET /available_payments: Responds with available payment methods
 * in JSON format.
 * - POST /login: Accepts a JSON body with a username and responds with
 * a welcome message for the user.
 *
 * The server listens on port 7865.
 */

const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;

  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_req, res) => {
  res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post('/login', (req, res) => {
  let username = '';

  if (req.body) {
    username = req.body.userName;
  }

  res.send(`Welcome ${username}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
