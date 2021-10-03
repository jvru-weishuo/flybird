var msg = 'i can make it.';
console.log(msg);

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
	res.send('hello,jvru.');
})

app.get('/content',(req,res)=>{
	res.send('i am fine');
})

app.listen(3000,()=>{
	console.info('the server has runned, and it is listenning the prot of 3000.');
})
