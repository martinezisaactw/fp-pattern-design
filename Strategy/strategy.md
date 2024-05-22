# Strategy
Strategy es un patron de diseño que nos permite cambiar el comportamiento de nuestra app en tiempo de ejecucion. Logramos esto encapsulando diferentes estrategias en funciones separadas, luego podemos crear un objeto con todas las funciones estrategias y por ultimo una funcion contexto que nos va a permitir llamar a la funcion estrategia que nuestra app necesita en determinado caso.


## Caso Ejemplo
Supongamos tenemos una tarea en la cual debemos consumir 3 apis de bancos de imagenes; Adobe Stock, IStock y Shutterstock.
La eleccion de cual plataforma va a ser dinamica.

### Explicacion

1.- Encapasulamos cada estrategia en una funcion:
```typescript
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
```
2.- Creamos un objeto con todas las funciones estrategias:
```typescript
const strategies = {adobeStock: adobeStock, iStock: iStock, shutterstock: shutterstock};
```
3.- Es este caso ocupamos selected y imageURL como hardcode, pero podemos ocupar props o parametros para que el llamado a la estrategia seleccionada sea dinamico
```typescript
const selected = "adobeStock";
const imageURL = "/1000_F_408262569_o5cvHPFlR0Llpm4IdR4RJujWOajoH8xw.jpg"

strategies[selected].downloadImage(imageURL)
```