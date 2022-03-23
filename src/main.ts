import * as dotenv from 'dotenv'
dotenv.config()
import { BaseExceptionFilter, NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	await app.listen(3000)
}
bootstrap()