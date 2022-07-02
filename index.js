import express from "express"
import bodyParser from "body-parser"
import productRouter from "./routes/product.js"

const app = express()



app.use(bodyParser.json())

// api/products
app.use('/api', productRouter)


app.listen(3001, function () {
  console.log("Server is running...");
})