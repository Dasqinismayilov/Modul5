const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;


app.use(express.json());

app.get('/employees', (req, res) => {
  fs.readFile('./employees.json', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server xətası');
    }
    const employees = JSON.parse(data);
    res.json(employees);
  });
});


app.listen(port, () => {
  console.log(`Server http://localhost:${port} ünvanında işləyir`);
});
