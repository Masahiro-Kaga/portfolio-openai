const dotenv = require('dotenv');
dotenv.config({ path: '../.env'});
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.SERVER_PORT;

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Server is running on PORT ${port}`));
