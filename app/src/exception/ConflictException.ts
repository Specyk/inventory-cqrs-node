import HttpException from './HttpException'

export default class ConflictException extends HttpException {
	statusCode = 409
}
