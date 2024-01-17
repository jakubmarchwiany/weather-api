import { Controller, Get, Query, ValidationPipe } from "@nestjs/common";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";

import { AppService } from "./app.service";
import { GetWeatherInfoDto } from "./dto/get-weather-info.dto";
import { WeatherInfo } from "./model/weatherInfo.type";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get("/weather")
	getWeatherInfo(@Query(new ValidationPipe()) queries: GetWeatherInfoDto): Promise<WeatherInfo> {
		return this.appService.getWeatherInfo(queries.cityName);
	}
}
