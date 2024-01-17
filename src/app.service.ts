/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { AxiosError } from "axios";
import { catchError, firstValueFrom } from "rxjs";

import { WeatherInfo } from "./model/weatherInfo.type";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

@Injectable()
export class AppService {
	constructor(private readonly httpService: HttpService) {}

	async getWeatherInfo(cityName: string): Promise<WeatherInfo> {
		const { data } = await firstValueFrom(
			this.httpService
				.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${WEATHER_API_KEY}`
				)
				.pipe(
					catchError((error: AxiosError) => {
						if (error.response?.status == 404) {
							throw new NotFoundException(undefined, "City not found");
						} else {
							throw new HttpException(
								"Failed to download weather",
								HttpStatus.SERVICE_UNAVAILABLE
							);
						}
					})
				)
		);

		const weatherInfo = {
			cityName: data.name,
			condition: data.weather[0].main,
			date: new Date(Number(data.dt * 1000 + data.timezone * 1000)),
			humidity: data.main.humidity,
			temperature: (Math.round(data.main.temp * 10) / 10).toFixed(0),
			windSpeed: data.wind.speed
		} as unknown as WeatherInfo;

		return weatherInfo;
	}
}
