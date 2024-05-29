const defaultSelected = "adobeStock";
const defaultImageURL =
  "/joH8xw.jpg";

function imageStockSelector(
  selected: "adobeStock" | "iStock" | "shutterStock" = defaultSelected,
  imageURL: string = defaultImageURL,
): string {
  const adobeStock = (imageURL: string): string =>
    `AdobeStock image is running ${imageURL}`;

  const iStock = (imageURL: string) => `IStock image is running ${imageURL}`;

  const shutterStock = (imageURL: string) => `ShutterStock image is running ${imageURL}`;

  const strategies = {
    adobeStock: adobeStock,
    iStock: iStock,
    shutterStock: shutterStock,
  };

  const result = strategies[selected](imageURL);

  return result;
}

export default imageStockSelector;
