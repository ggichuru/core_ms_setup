require('dotenv').config()

export const settings = {
    server: {
        port: process.env.PORT || 3001,
        host: process.env.HOST || 'localhost',
    },
    mq: {
        url:
            process.env.MQ_URL ||
            'amqps://rygffvfn:Y78Bdt-0rNdHknk_9iS28xddbHCp9wil@rattlesnake.rmq.cloudamqp.com/rygffvfn',
        queueName: process.env.MQ_QUEUE_NAME || 'auth-notif',
    },
}
