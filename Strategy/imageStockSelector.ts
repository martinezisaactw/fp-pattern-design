interface StockStrategy {
  name: string;
  downloadImage(imageURL: string): void;
}

const adobeStock: StockStrategy = {
  name: "AdobeStock",
  downloadImage: (imageURL: string) => {
    console.log('AdobeStock image is running');
  }
}

const iStock: StockStrategy = {
  name: "IStock",
  downloadImage: (imageURL: string) => {
    console.log('IStock image is running');
  } 
}

const shutterstock: StockStrategy = {
  name: "ShutterStock",
  downloadImage: (imageURL: string) => {
    console.log('ShutterStock image is running');
  }
}

const strategies = {adobeStock: adobeStock, iStock: iStock, shutterstock: shutterstock};

const selected = "adobeStock";
const imageURL = "/1000_F_408262569_o5cvHPFlR0Llpm4IdR4RJujWOajoH8xw.jpg"

strategies[selected].downloadImage(imageURL)