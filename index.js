import express from 'express';
const app =  express();
const port = 8080;
app.get("/", (req, resp) => {
    resp.send('app is working');
})
app.listen(port, function () {
    console.log(`Listening port on the ${port}`)
});