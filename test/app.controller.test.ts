/* eslint-disable @typescript-eslint/no-unsafe-call */
import { describe, expect, it } from "bun:test";
import request, { Response } from "supertest";

const API_URL = process.env.API_URL;

console.log(API_URL);

describe("AppController", () => {
	let res: Response;

	describe("getWeather", () => {
		it("should_return_200_for_valid_data", async () => {
			res = await request(API_URL!).get("/weather?cityName=warsaw");

			expect(res.statusCode).toBe(200);

			expect(res.body).toEqual({
				cityName: expect.any(String),
				condition: expect.any(String),
				date: expect.any(String),
				humidity: expect.any(Number),
				temperature: expect.any(Number),
				windSpeed: expect.any(Number)
			});
		});
	});

	it("should_return_400_for_invalid_data", async () => {
		res = await request(API_URL!).get("/weather?cityName=warsawasddasdasd");

		expect(res.statusCode).toBe(404);
	});

	it("should_return_400_for_missing_city_name", async () => {
		res = await request(API_URL!).get("/weather");

		expect(res.statusCode).toBe(400);
	});

	it("should_return_404_for_wrong_endpoint", async () => {
		res = await request(API_URL!).get("/leathar");

		expect(res.statusCode).toBe(404);
	});
});
