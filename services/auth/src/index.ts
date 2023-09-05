import express, { Request, Response } from 'express'
import { settings } from '../settings'
import { createProducer } from './producer'

let port = settings.server.port
let amqp_url = settings.mq.url
let queue_name = settings.mq.queueName

// middlewares
const app = express()

const producer = createProducer(amqp_url, queue_name)

app.use(express.json())

// routes
app.post('/register', (req: Request, res: Response) => {
    const { email, password } = req.body
    console.log('Registering user...')
    const msg = {
        action: 'REGISTER',
        data: { email, password },
    }
    producer(JSON.stringify(msg))

    return res.send('OK')
})

app.post('/login', (req: Request, res: Response) => {
    const { email, password } = req.body
    console.log('Login user...')
    const msg = {
        action: 'LOGIN',
        data: { email, password },
    }
    producer(JSON.stringify(msg))
    return res.send('OK')
})

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`:::: Auth service listening on port -> ${port}`)
})
