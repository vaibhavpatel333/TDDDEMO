import { expect } from "chai";

describe("String Calculator", () => {
    it("returns 0 for an empty string", () => {
      expect(add("")).to.equal(0);
    });
})  