require('dotenv').config()

export const settings = {
    server: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost',
    },
    mq: {
        url: process.env.AMQP_URL,
        queueName: process.env.MQ_QUEUE_NAME || 'auth-notif',
    },
}
