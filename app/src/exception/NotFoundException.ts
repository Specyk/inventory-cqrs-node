import HttpException from './HttpException'

export default class NotFoundException extends HttpException {
	statusCode = 404
}
