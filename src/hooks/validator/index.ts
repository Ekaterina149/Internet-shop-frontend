import type { ValidationObj } from "./field";

export * from "./field";
export * from "./form";

/**
 * Checks if a value is required.
 *
 * @param {T} value - The value to check.
 * @return {boolean} Returns true if the value is required, false otherwise.
 */
export function required<T>(value: T) {
  if (typeof value === "string") return !value.trim();
  return value !== undefined || value !== null;
}

/**
 * Checks if the given value is a valid email address.
 *
 * @param {string} value - The email address to be checked.
 * @return {boolean} Returns true if the email address is invalid, false otherwise.
 */
export function email(value: string) {
  return !/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(value);
}

/**
 * Returns a function that checks if a given string has a length less than the specified minimum length.
 *
 * @param {number} length - The minimum length that the string should have.
 * @return {(value: string) => boolean} - A function that takes a string as input and returns true if the string has a length less than the specified minimum length, otherwise false.
 */
export function minLength(length: number) {
  return (value: string) => value.length < length;
}

/**
 * Returns a function that checks if the given string value
 * has a length greater than the specified length.
 *
 * @param {number} length - The maximum length allowed for the string.
 * @returns {Function} A function that takes a string value as input
 * and returns true if the length of the value is greater than the
 * specified length, false otherwise.
 */
export function maxLength(length: number) {
  return (value: string) => value.length > length;
}

/**
 * Generates a function comment for the given function body.
 *
 * @param {RegExp} pattern - The regular expression pattern to be used for testing the value.
 * @return {Function} - A function that takes a string value and returns whether the pattern does not match the value.
 */
export function pattern(pattern: RegExp) {
  return (value: string) => !pattern.test(value);
}

/**
 * Checks if the given value contains a space.
 *
 * @param {string} value - The value to check.
 * @return {boolean} Returns true if the value contains a space, otherwise returns false.
 */
export function space(value: string) {
  return value.includes(" ");
}

/**
 * A function that checks if the value of a specific key in a model is equal to a given value.
 *
 * @param {string} key - the key of the value in the model to compare
 * @returns {function} - a function that takes a value and a model as arguments and returns a boolean indicating if the value is not equal to the model's value for the specified key
 */
export function equal<T>(key: keyof T): ValidationObj<T, any> {
  return {
    initial: ({ check }, fields) => watch(fields[key], () => check()),
    check: (value, model) => value !== model[key].value,
  };
}

export function firstLetter(value: string) {
  return /^[a-zA-Z]$/.test(value);
}

export function latin(value: string) {
  return !/^[a-zA-Z0-9]+$/.test(value);
}

export function numeric(value: string) {
  return !/^[0-9]+$/.test(value);
}



