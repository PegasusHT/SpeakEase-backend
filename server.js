const app = require('./src/app');
require('dotenv').config();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});