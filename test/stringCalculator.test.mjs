import { expect } from "chai";
import { add } from "../stringCalculator.js";

describe("String Calculator", () => {
  it("returns 0 for an empty string", () => {
    expect(add("")).to.equal(0);
  });

  it("returns the number for a single number", () => {
    expect(add("1")).to.equal(1);
  });

  it("returns the sum of two numbers", () => {
    expect(add("1,5")).to.equal(6);
  });
  
});
