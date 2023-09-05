import express, { Request, Response } from 'express'
import { settings } from '../settings'
import { createConsumer } from './consumer'

let port = settings.server.port
let amqp_url = settings.mq.url
let queue_name = settings.mq.queueName

// middlewares
const app = express()

const consumer = createConsumer(amqp_url, queue_name)

consumer()
app.use(express.json())

// routes
app.get('/', (req: Request, res: Response) => {
    res.send('Notifications service')
})

app.listen(port, () => {
    console.log(`:::: Notification service listening on port ${port}`)
})
