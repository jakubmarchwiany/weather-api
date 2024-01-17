import { CacheInterceptor } from "@nestjs/cache-manager";
import { Controller, Get, Query, UseInterceptors, ValidationPipe } from "@nestjs/common";

import { AppService } from "./app.service";
import { GetWeatherInfoDto } from "./dto/get-weather-info.dto";
import { WeatherInfo } from "./model/weatherInfo.type";

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get("/weather")
	getWeatherInfo(@Query(new ValidationPipe()) queries: GetWeatherInfoDto): Promise<WeatherInfo> {
		return this.appService.getWeatherInfo(queries.cityName);
	}
}
