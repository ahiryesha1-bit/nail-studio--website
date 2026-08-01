const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.post('/api/bookings', (req, res) => {
  console.log('New Booking:', req.body);
  res.json({ message: 'Booking Confirmed! We will call you soon ✨' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));