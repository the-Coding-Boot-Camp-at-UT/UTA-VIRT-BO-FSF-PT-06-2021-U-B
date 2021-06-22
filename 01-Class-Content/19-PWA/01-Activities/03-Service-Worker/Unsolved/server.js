const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/imageperformance',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
