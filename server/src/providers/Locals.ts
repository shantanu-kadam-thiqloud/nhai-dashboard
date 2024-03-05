import { Application } from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';

class Locals {
	/**
	 * Makes env configs available for your app
	 * throughout the app's runtime
	 */
	public static config(): any {
		dotenv.config({ path: path.join(__dirname, '../../.env') });
		const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
		const port = process.env.PORT || 3007;
		const appSecret = process.env.APP_SECRET || 'This is your responsibility!';
		const maxUploadLimit = process.env.APP_MAX_UPLOAD_LIMIT || '50mb';
		const maxParameterLimit = process.env.APP_MAX_PARAMETER_LIMIT || '50mb';
		const name = process.env.APP_NAME || 'NodeTS Dashboard';
		const year = (new Date()).getFullYear();
		const company = process.env.COMPANY_NAME || 'NHAI Auth Proxy';
		const isCORSEnabled = process.env.CORS_ENABLED || true;
		const jwtExpiresIn = process.env.JWT_EXPIRES_IN || 3;
		const apiPrefix = process.env.API_PREFIX || 'api';
		const logDays = process.env.LOG_DAYS || 10;
		const redisHttpPort = process.env.REDIS_QUEUE_PORT || 6379;
		const redisHttpHost = process.env.REDIS_QUEUE_HOST || '127.0.0.1';
		const redisPrefix = process.env.REDIS_QUEUE_DB || 'q';
		const redisDB = process.env.REDIS_QUEUE_PREFIX || 3;
		const baseUrl = `http://localhost:${process.env.PORT || 3007}`;
		const aBaseUrl = 'http://172.16.16.201:8085';//Ayush
		const amBaseUrl = 'http://172.16.16.99:8091';//Amol
		const sBaseUrl = 'http://172.16.16.201:7091';//Sumit

		return {
			appSecret,
			apiPrefix,
			company,
			isCORSEnabled,
			jwtExpiresIn,
			logDays,
			maxUploadLimit,
			maxParameterLimit,
			name,
			port,
			redisDB,
			redisHttpPort,
			redisHttpHost,
			redisPrefix,
			url,
			baseUrl,
			aBaseUrl,
			amBaseUrl,
			sBaseUrl
		};
	}

	/**
	 * Injects your config to the app's locals
	 */
	public static init(_express: Application): Application {
		_express.locals.app = this.config();
		return _express;
	}
}

export default Locals;
