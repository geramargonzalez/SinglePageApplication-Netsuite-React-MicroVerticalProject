export const validateRequired = (value: string): boolean => {
    return value.trim() !== '';
};

export const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

export const validateNumber = (value: string): boolean => {
    return !isNaN(Number(value)) && value.trim() !== '';
};

export const validatePositiveNumber = (value: string): boolean => {
    const number = Number(value);
    return validateNumber(value) && number > 0;
};

export const validateLength = (value: string, minLength: number, maxLength: number): boolean => {
    return value.length >= minLength && value.length <= maxLength;
};