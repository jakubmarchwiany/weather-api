/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { expect } from "bun:test";

export function expectedBody(p: any): any {
	return { data: { ...p }, message: expect.any(String) };
}
