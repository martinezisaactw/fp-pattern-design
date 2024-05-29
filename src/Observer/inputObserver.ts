export type ValidationRule = (valor: string) => string | null;

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
