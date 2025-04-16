// src/helpers/__tests__/Helper.test.js
import Helper from './Helper';

describe('Helper', () => {


    describe('isEmpty', () => {
        it('should return true for an empty string', () => {
            expect(Helper.isEmpty('')).toBe(true);
        });

        it('should return true for null', () => {
            expect(Helper.isEmpty(null)).toBe(true);
        });

        it('should return true for undefined', () => {
            expect(Helper.isEmpty(undefined)).toBe(true);
        });

        it('should return false for a non-empty string', () => {
            expect(Helper.isEmpty('Hello')).toBe(false);
        });
    });

    describe('isNotEmpty', () => {
        it('should return true for a non-empty string', () => {
            expect(Helper.isNotEmpty('Hello')).toBe(true);
        });

        it('should return false for an empty string', () => {
            expect(Helper.isNotEmpty('')).toBe(false);
        });

        it('should return false for null', () => {
            expect(Helper.isNotEmpty(null)).toBe(false);
        });

        it('should return false for undefined', () => {
            expect(Helper.isNotEmpty(undefined)).toBe(false);
        });
    });

    describe('isDefined', () => {
        it('should return true for non-null and non-undefined values', () => {
            expect(Helper.isDefined('Hello')).toBe(true);
            expect(Helper.isDefined(123)).toBe(true);
        });

        it('should return false for null and undefined values', () => {
            expect(Helper.isDefined(null)).toBe(false);
            expect(Helper.isDefined(undefined)).toBe(false);
        });
    });

    describe('isNotDefined', () => {
        it('should return true for null and undefined values', () => {
            expect(Helper.isNotDefined(null)).toBe(true);
            expect(Helper.isNotDefined(undefined)).toBe(true);
        });

        it('should return false for non-null and non-undefined values', () => {
            expect(Helper.isNotDefined('Hello')).toBe(false);
            expect(Helper.isNotDefined(123)).toBe(false);
        });
    });


    describe('parseDdMmYyyyToIsoDate', () => {
        it('should return correct ISO date string', () => {
            const isoDate = Helper.parseDdMmYyyyToIsoDate('01/01/2020');
            expect(isoDate).toBe('2020-01-01T00:00:00.000Z');
        });


    });

    describe('isValidEmail', () => {
        it('should return true for a valid email', () => {
            expect(Helper.isValidEmail('test@example.com')).toBe(true);
        });

        it('should return false for an invalid email', () => {
            expect(Helper.isValidEmail('invalidemail')).toBe(false);
        });

        it('should return false for an empty email', () => {
            expect(Helper.isValidEmail('')).toBe(false);
        });
    });

    describe('isValidPhone', () => {
        it('should return true for a valid phone number', () => {
            expect(Helper.isValidPhone('(11) 91234-5678')).toBe(true);
        });



        it('should return false for an empty phone number', () => {
            expect(Helper.isValidPhone('')).toBe(false);
        });
    });

    describe('isValidCpf', () => {
        it('should return true for a valid CPF', () => {
            expect(Helper.isValidCpf('123.456.789-09')).toBe(true);
        });

        it('should return false for an invalid CPF', () => {
            expect(Helper.isValidCpf('123.456.789-00')).toBe(false);
        });

        it('should return false for an empty CPF', () => {
            expect(Helper.isValidCpf('')).toBe(false);
        });

        it('should return false for CPF with invalid length', () => {
            expect(Helper.isValidCpf('123456789')).toBe(false);
        });
    });
});
