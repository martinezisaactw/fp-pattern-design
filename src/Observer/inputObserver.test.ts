/**
 * @jest-environment jsdom
 */

import { ValidationRule, madeSubject, reusableInput } from './inputObserver';

describe("input observer", () => {
  let mockElement;
  let mockSubject;
  beforeAll(() => {
    mockElement = document.createElement("input");
    mockSubject = jest.fn();
  });

  it("should create a subject", () => {

    const subject = madeSubject();
    expect(subject).toHaveProperty("next");
    expect(subject).toHaveProperty("subscribe");
  });

  it("should subscribe to input event", () => {
    const eventSpy = jest.spyOn(mockElement, "addEventListener");
    reusableInput(mockElement);
    expect(eventSpy).toHaveBeenCalledWith("input", expect.any(Function));
  });

  it("should notify new value to subscriptors", () => {
    const subject = madeSubject();
    reusableInput(mockElement).subscribe(mockSubject);

    mockElement.value = "new text";
    mockElement.dispatchEvent(new Event("input"));

    expect(mockSubject).toHaveBeenCalledWith("new text");
  });

  it("should validate value with custom rules", () => {
    const mockRule: ValidationRule = jest.fn().mockReturnValue("Error de validación");
    const input = reusableInput(mockElement);
    input.addValidationRulz(mockRule);

    mockElement.value = "invalid value";
    mockElement.dispatchEvent(new Event("input"));

    expect(mockRule).toHaveBeenCalledWith("invalid value")
  })
})