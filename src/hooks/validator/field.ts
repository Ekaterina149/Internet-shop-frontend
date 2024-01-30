import type { MaybeRef, UnwrapRef, Ref } from "vue";
import type { FormType } from "./form";

export type AnyObject = Record<string, any>;

export type MaybePromise<T> = T; // | Promise<T>;

/**
 * Initial function for acquiring values
 */
export type InitialFn<M extends AnyObject> = (
  field: { value: Ref<any>; check: () => void },
  fiels: FormType<M>
) => void;
/**
 * Validation function
 * @param value
 * @return boolean true for invalid, false for valid
 */
export type ValidationFn<T, M extends AnyObject> = (value: UnwrapRef<T>, fiels: FormType<M>) => MaybePromise<boolean>;
export type ValidationObj<T, M extends AnyObject> = {
  initial: InitialFn<M>;
  check: ValidationFn<T, M>;
};
export type ValidationRecord<T, M extends AnyObject> = Record<keyof M, ValidationFn<T, M> | ValidationObj<T, M>>;
export type ValidationErrors = Record<string, boolean>;
export type UseFieldType<T, K extends AnyObject> = ReturnType<typeof useField<T, K>>;

export interface FieldOptions<T, M extends AnyObject> {
  initialValue: MaybeRef<T>;
  validators: ValidationRecord<T, M>;
}

function isFn(val: any): val is Function {
  return typeof val === "function";
}

/**
 * Value hook watch changes in the input field and update the error
 */
export function useField<T = string, K extends AnyObject = {}>(
  { initialValue, validators }: FieldOptions<T, K>,
  fields: K
) {
  const value = ref<T>(toValue(initialValue));
  const errors = reactive<ValidationErrors>({});
  const isInvalid = ref(false);
  const isChanged = ref(false);

  function check() {
    let isValidValue = false;
    for (const key in errors) errors[key] = false;

    for (const [key, validator] of Object.entries(validators)) {
      const result = isFn(validator) ? validator(value.value, fields) : validator.check(value.value, fields);

      if (result) isValidValue = result;
      errors[key] = result;
    }
    if (isInvalid.value !== isValidValue) isInvalid.value = isValidValue;

    isChanged.value = true;
  }
  let unwatch = watch(value, check);

  Object.values(validators).forEach((validator) => {
    if (!isFn(validator)) validator.initial({ value, check }, fields);
  });

  function emitError(key: string) {
    errors[key] = true;
    isInvalid.value = true;
  }

  function reset() {
    debugger;
    unwatch();
    value.value = toValue(initialValue) as any;
    for (const key in errors) errors[key] = false;
    isInvalid.value = false;
    isChanged.value = false;
    unwatch = watch(value, check);
  }

  return { value, errors, isInvalid, isChanged, check, emitError, reset };
}
