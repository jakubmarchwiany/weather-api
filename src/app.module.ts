/* eslint-disable @typescript-eslint/no-extraneous-class */
import { HttpModule } from "@nestjs/axios";
import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
	controllers: [AppController],
	imports: [
		ConfigModule.forRoot(),
		HttpModule,
		CacheModule.register({ max: 1000, ttl: 1000 * 60 * 5 })
	],
	providers: [AppService]
})
export class AppModule {}
