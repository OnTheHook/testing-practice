import capitalize from "../apps/capitalize"

test("capitalizes a string", () => {
    expect(capitalize("zebra")).toBe("Zebra")
})