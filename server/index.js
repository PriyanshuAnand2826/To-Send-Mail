const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors')
const sendMail = require('./Email');  // Import the sendMail function

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(cors(
  {
    origin: 'http://localhost:5173', // Update with your client's origin
    methods: ['GET', 'POST'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
  }
))
app.options('/send', cors());

app.post('/send', (req, res) => {
  const { name, email, contact, query } = req.body;

  sendMail(name, email, contact, query, (error, info) => {
      if (error) {
          return res.status(500).json({ message: 'Error sending email', error });
      }
      res.status(200).json({success:true, message: 'Email sent successfully', info });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
