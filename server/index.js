import express from 'express';
import path from'path';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/route.js';
const app = express();
// //static files
// const __filename = new URL(import.meta.url).pathname;
// const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname,'../client/build')))

// app.get('*',function(req,res){
//   res.sendFile(path.join(__dirname,"../client/build/index.html"))
// })


app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use('/', routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));