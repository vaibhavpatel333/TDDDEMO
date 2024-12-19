import { expect } from "chai";
import { add } from "../stringCalculator.js";

describe("String Calculator", () => {
    it("returns 0 for an empty string", () => {
      expect(add("")).to.equal(0);
    });
})  