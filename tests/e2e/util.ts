import { expect } from "chai";
import { DuneError } from "../../src";

const { BASIC_API_KEY, PLUS_API_KEY } = process.env;
if (BASIC_API_KEY === undefined) {
  throw Error("Missing ENV var: BASIC_API_KEY");
}
if (PLUS_API_KEY === undefined) {
  throw Error("Missing ENV var: PLUS_API_KEY");
}
export const BASIC_KEY: string = BASIC_API_KEY!;
export const PLUS_KEY: string = PLUS_API_KEY!;

export const expectAsyncThrow = async (
  promise: Promise<any>,
  message?: string | object,
) => {
  try {
    await promise;
    // Make sure to fail if promise does resolve!
    expect(false).to.be.equal(true);
  } catch (error) {
    if (message) {
      expect(error.message).to.be.deep.equal(message);
      expect(error).instanceOf(DuneError);
    } else {
      expect(error).instanceOf(DuneError);
    }
  }
};
