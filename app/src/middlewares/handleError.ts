import { Request, Response, ErrorRequestHandler, NextFunction} from "express"
import { logger } from "../utils/logger"
import HttpException from "../exception/HttpException"

export function handleError(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
	logger.error(err)
	if (err instanceof HttpException) {
		res.status(err.statusCode).json({
			message: err.message,
		})
		return
	}

	res.status(500).json({
		message: 'Internal server error',
	})
}
