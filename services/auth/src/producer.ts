import amqp, { Channel, Connection } from 'amqplib/callback_api'

export const createProducer = (amqpUrl: string, queueName: string) => {
    console.log('\n[producer] Connecting to RabbitMQ ... ')

    let ch: Channel

    amqp.connect(amqpUrl, (errConnect: Error, connection: Connection) => {
        if (errConnect) {
            console.log('Error connecting to RabbitMQ: ', errConnect)
            return
        }

        connection.createChannel((errorChannel: Error, channel: Channel) => {
            if (errorChannel) {
                console.log('Error creating channel: ', errorChannel)
                return
            }

            ch = channel
            console.log('[producer] Connected to RabbitMQ')
        })
    })
    return (msg: string) => {
        console.log('[producer] Sending message to RabbitMQ')
        ch.sendToQueue(queueName, Buffer.from(msg))
    }
}
