/* eslint-disable @typescript-eslint/no-unsafe-call */
import { describe, expect, it } from "bun:test";
import request, { Response } from "supertest";

import { expectedBody } from "./utils";

const API_URL = process.env.API_URL;

console.log(API_URL);

describe("AppController", () => {
	let res: Response;

	describe("getWeather", () => {
		it("should_return_200_for_valid_data", async () => {
			res = await request(API_URL!).get("/weather?cityName=warsaw");

			expect(res.statusCode).toBe(200);
		});
	});
});
