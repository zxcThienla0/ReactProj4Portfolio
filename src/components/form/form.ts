export const errorMessages = {
  valueMissing: () => 'Пожалуйста, заполните это поле',
  patternMismatch: ({ title }: { title?: string }) =>
    title || 'Данные не соответствуют формату',
  tooShort: ({ minLength }: { minLength: number }) => `Минимум ${minLength} символов`,
  tooLong: ({ maxLength }: { maxLength: number }) => `Максимум ${maxLength} символов`,
};

type FieldError = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export function validateField(field: FieldError): string[] {
  const validity = field.validity;
  const messages: string[] = [];

  Object.entries(errorMessages).forEach(([errorType, getMessage]) => {
    if (validity[errorType as keyof ValidityState]) {
      messages.push(getMessage(field as any));
    }
  });

  return messages;
}

export function validateForm(form: HTMLFormElement | null): {
  isValid: boolean;
  errors: Record<string, string[]>;
  firstInvalidField: FieldError | null;
} {
  if (!form)
    return { isValid: false, errors: {}, firstInvalidField: null };

  const elements = [...Array.from(form.elements)] as FieldError[];
  const requiredFields = elements.filter((el) => 'required' in el && el.required);

  let isValid = true;
  const errors: Record<string, string[]> = {};
  let firstInvalidField: FieldError | null = null;

  requiredFields.forEach((field) => {
    const fieldErrors = validateField(field);
    if (fieldErrors.length > 0) {
      errors[field.name] = fieldErrors;
      isValid = false;
      if (!firstInvalidField) {
        firstInvalidField = field;
      }
    }
  });

  return { isValid, errors, firstInvalidField };
}