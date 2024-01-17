import { MinLength } from "class-validator";

export class GetWeatherInfoDto {
	@MinLength(2)
	cityName: string;
}
