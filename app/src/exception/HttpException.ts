export default abstract class HttpException extends Error {
	public readonly statusCode: number = 200

	constructor(message: string) {
		super(message)
	}
}
