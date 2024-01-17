import { NestFactory } from "@nestjs/core";
import * as fs from "fs";

import { AppModule } from "./app.module";

// const httpsOptions = {
// 	cert: fs.readFileSync("secrets/ca.crt"),
// 	key: fs.readFileSync("secrets/ca.key")
// };

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create(AppModule);
	// const app = await NestFactory.create(AppModule, { httpsOptions });

	await app.listen(8080);
}
bootstrap();
