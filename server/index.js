import express from "express"
import userRoutes from "./src/api/v1/routes/userRoutes.js"
// import errorMiddleware from "./src/api/v1/middleware/errors.js"

const app = express()
const port = 3000

app.use(express.json())

app.use('/api/v1/', userRoutes)

// app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})



export default app