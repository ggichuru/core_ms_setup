# IMPLEMENTING EVENT-DRIVEN ARCHITECTURE [ nodeJS | Typescript | RabbitMQ | CloudAMQP]

This template helps you setup the implementation of an event-driven architecture using, Typescript and RabbitMQ

The architecture has three components:

* Producer ▶️ create events.
* Consumer ◀️ accept events.
* Queue 🔄 message buffer that accepts and forwards events.
  * RabbitMQ 📞 message broker that accepts and forwards messages.
    * *Makes sure that when the consumer is not available, there's a place to store the message.*

## INSTALL AND RUN

### Setup .env

```bash
filename:
    .env

* contents *

# AMQP_URL

AMQP_URL="conncetion string from your CloudAMQP instance"

```

### Install dependencise

```bash

yarn install

```

### Run services (servers)
> ---
>
>  ```
>    yarn svr:auth
>   ```
>
> 🔐 **auth service**
>
> ---
>
> ```
>    yarn svr:notif
>   ```
>
> 🔔 **notification service**
> 
> ---