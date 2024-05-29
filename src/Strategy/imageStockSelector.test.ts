import imageStockSelector from "./imageStockSelector";

describe("imageStockSelector function", () => {
  it("Should run AdobeStock when is selected", () => {
    const result = imageStockSelector("adobeStock");
    expect(result).toBe("AdobeStock image is running /joH8xw.jpg");
  });
  it("Should run iStock when is selected", () => {
    const result = imageStockSelector("iStock");
    expect(result).toBe("IStock image is running /joH8xw.jpg");
  });
  it("Should run shutterStock when is selected", () => {
    const result = imageStockSelector("shutterStock");
    expect(result).toBe("ShutterStock image is running /joH8xw.jpg");
  });
  it("Should run default AdobeStock when nothing is selected", () => {
    const result = imageStockSelector();
    expect(result).toBe("AdobeStock image is running /joH8xw.jpg");
  });
});
