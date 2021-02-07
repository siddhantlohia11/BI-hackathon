const express = require('express')
const app = express()
 
var arr = [
  {
    key: 1,
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3,
    title: "Karan is speaking",
  },
  {
    key: 2,
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1,
    title: "Siddhant is speaking",
  },
  {
    key: 3,
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4,
    title: "King is speaking",
  },
  {
    key: 4,
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4,
    title: "Sid is speaking",
  },
  {
    key: 5,
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4,
    title: "Sidd is speaking",
  },
  {
    key: 6,
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3,
    title: "Queen is speaking",
  },
  {
    key: 7,
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4,
    title: "Sid is speaking",
  },
  {
    key: 6,
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3,
    title: "Spade is speaking",
  },
  {
    key: 7,
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4,
    title: "King is speaking",
  }

];


app.get('/check', function (req, res) {
  res.json({body: JSON.stringify(arr)});
})

app.post("/uploadImage", function(req,res){
	res.json("Found");
})


 
app.listen(5000)
