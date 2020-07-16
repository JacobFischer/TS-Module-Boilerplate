import { foo } from "../src";

describe("foo", () => {
    it("exists", () => {
        expect(foo).toBeTruthy();
    });

    it("is bar", () => {
        expect(foo).toBe("bar");
    });
});
