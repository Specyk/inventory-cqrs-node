export default abstract class HttpException extends Error {
	public readonly statusCode: number

	constructor(message: string) {
		super(message)
	}
}
