export type Validator = (value: string) => string | null;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DIGITS_PATTERN = /^\d+$/;
const POSTAL_CODE_PATTERN = /^\d{5}$/;

function getTodayAsIsoDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function validateRequired(value: string): string | null {
  return value.trim() === "" ? "Bitte geben Sie einen Wert ein" : null;
}

export function validateEmail(value: string): string | null {
  return EMAIL_PATTERN.test(value.trim())
    ? null
    : "Bitte geben Sie eine gültige E-Mail-Adresse ein";
}

export function validateDigits(value: string): string | null {
  return DIGITS_PATTERN.test(value.trim())
    ? null
    : "Bitte geben Sie nur Ziffern ein";
}

export function validatePostalCode(value: string): string | null {
  return POSTAL_CODE_PATTERN.test(value.trim())
    ? null
    : "Bitte geben Sie eine fünfstellige PLZ ein";
}

export function validateNotInFuture(value: string): string | null {
  return value > getTodayAsIsoDate()
    ? "Das Datum darf nicht in der Zukunft liegen"
    : null;
}
