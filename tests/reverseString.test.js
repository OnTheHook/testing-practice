import reverseString from "../apps/reverseString"

test("reverse a string", () => {
    expect(reverseString("zebra")).toBe("arbez")
})