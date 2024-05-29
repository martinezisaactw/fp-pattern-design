# Observer

 Observer o pub/sub (publicacion/subscripcion) es un patron de diseño que nos permite cambiar el comportamiento de nuestra app en tiempo de ejecucion. Logramos esto con una funcion para crear el Subject para administrar suscriptores y notificarles sobre cambios de estado.

## Caso Ejemplo

Supongamos queremos crear un controlador para nuestros input, el cual reaccione ante cualquier cambio de valor de entrada, ademas queremos que nuestros inputs reciban validaciones customizadas.

### Explicacion

1.- Definimos una funcion para crear nuestro Subject:

```typescript
export const madeSubject = () => {
  let value: string;
  const subscribers: ((newValue: string) => void)[] = [];

  return {
    next: (newValue: string) => {
      value: newValue;
      subscribers.forEach((subscriber) => subscriber(newValue));
    },
    subscribe: (callback: (newValue: string) => void) => {
      subscribers.push(callback);
    }
  }
}
```

2.- Definimos el tipado para las reglas de validacion: 

```typescript
export type ValidationRule = (valor: string) => string | null;
```

3.- Definimos una funcion para crear la "instancia" de nuestro subject utilizando la funcion creadora para manejar los cambios de valor.

```typescript
export const reusableInput = (element: HTMLInputElement) => {
  const subject = madeSubject();

  element.addEventListener("input", () => {
    const value = element.value;
    const errors = validationRulz.map((rule) => rule(value)).filter((error) => error !== null);
    const errorMessage = errors.length > 0 ? errors.join("\n") : null;

    element.setCustomValidity(errorMessage || "");
    subject.next(value);
  })

  const validationRulz: ValidationRule[] = [];

  return {
    subscribe: subject.subscribe,
    addValidationRulz: (rule: ValidationRule) => validationRulz.push(rule)
  }
}
```
