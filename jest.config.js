/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
	preset: "ts-jest",
	testEnvironment: "node",
	setupFilesAfterEnv: ["./app/test/setup.ts"],
	verbose: true,
	moduleNameMapper: {
		"^jose/(.*)$": "<rootDir>/node_modules/jose/dist/node/cjs/$1",
		"^@\/(.*)$": "<rootDir>/app/src/$1",
	},
};