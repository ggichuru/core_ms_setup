import amqp, { Message } from 'amqplib/callback_api'

export const createConsumer = (amqpUrl: string, queueName: string) => {
    console.log('\n[consumer] Connecting to RabbitMQ ... ')
    return () => {
        amqp.connect(amqpUrl, (errConnect, connection) => {
            if (errConnect) {
                throw errConnect
            }

            connection.createChannel((errorChannel, channel) => {
                if (errorChannel) {
                    throw errorChannel
                }

                channel.assertQueue(queueName, { durable: true })

                console.log('[consumer] Connected to RabbitMQ')

                channel.consume(
                    queueName,
                    (msg: Message | null) => {
                        if (msg) {
                            const parsed = JSON.parse(msg.content.toString())
                            switch (parsed.action) {
                                case 'REGISTER':
                                    console.log(
                                        'Consuming REGISTER action',
                                        parsed.data
                                    )
                                    break
                                case 'LOGIN':
                                    console.log(
                                        'Consuming LOGIN action',
                                        parsed.data
                                    )
                                    break
                                default:
                                    break
                            }
                        }
                    },
                    { noAck: true }
                )
            })
        })
    }
}
