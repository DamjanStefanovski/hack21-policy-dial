import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());

app.listen(3000, () =>
    console.log('Policy Dial - Hack-21 @ BigID!')
);

app.get('/', (req, res) => {
    res.send('Welcome to Policy Dial!');
});
