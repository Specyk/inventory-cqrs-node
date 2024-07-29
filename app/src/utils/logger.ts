import createPinoLogger, { LoggerOptions } from 'pino'
import pretty from 'pino-pretty'

const stream = pretty({
	colorize: true,
})

const config: LoggerOptions = {}

if(process.env.NODE_ENV !== 'production') {
	config.level ='debug'
}

const logger = createPinoLogger(config, stream)

export { logger }
