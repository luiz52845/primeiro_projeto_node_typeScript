import  express, { request, response } from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World 2'})
});

app.listen(3333,() => {
    console.log("server started on port 3333!")
});