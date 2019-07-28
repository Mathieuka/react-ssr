//express
const express = require("express");
const PORT = 3000;
const app = express();

// React
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const Home = require("./client/components/Home").default;

app.get("/", (req,res)=>{
    const content = renderToString(<Home/>);

    res.send(content);
});

app.listen(PORT, ()=>{
    console.log("listening on port: 3000");
});