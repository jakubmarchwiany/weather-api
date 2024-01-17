/* eslint-disable @typescript-eslint/no-extraneous-class */
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
	controllers: [AppController],
	imports: [ConfigModule.forRoot(), HttpModule],
	providers: [AppService]
})
export class AppModule {}
