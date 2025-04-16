// src/helpers/__tests__/FormHelper.test.js
import FormHelper from './FormHelper';

describe('FormHelper Validation', () => {
  it('should validate if NotEmpty returns correct message for empty string', () => {
    expect(FormHelper.Validation.NotEmpty('')).toBe('Preenchimento obrigatório');
  });

  it('should validate if NotEmpty returns true for non-empty string', () => {
    expect(FormHelper.Validation.NotEmpty('Hello')).toBe(true);
  });

  it('should validate if Required returns correct message for undefined', () => {
    expect(FormHelper.Validation.Required('Field is required')(undefined)).toBe('Field is required');
  });

  it('should validate if Required returns true for non-empty value', () => {
    expect(FormHelper.Validation.Required('Field is required')('Hello')).toBe(true);
  });

  it('should validate if NoEmptySpace returns correct message for string with spaces', () => {
    expect(FormHelper.Validation.NoEmptySpace('Hello world')).toBe('Não pode conter espaço em branco');
  });

  it('should validate if ValidateRG returns correct message for invalid RG', () => {
    expect(FormHelper.Validation.ValidateRG('1234')).toBe('Informe um RG válido');
  });

  it('should validate if ValidateCNH returns correct message for CNH with invalid length', () => {
    expect(FormHelper.Validation.ValidateCNH('1234567')).toBe('Informe uma CNH válida');
  });

  it('should validate if ValidateCPF returns correct message for invalid CPF', () => {
    expect(FormHelper.Validation.ValidateCPF('12345678900')).toBe('Insira um CPF válido');
  });

  it('should validate if ValidateEmail returns correct message for invalid email', () => {
    expect(FormHelper.Validation.ValidateEmail('invalidemail')).toBe('E-mail informado não é válido');
  });

  it('should validate if ValidatePhoneMask returns correct message for invalid phone number', () => {
    expect(FormHelper.Validation.ValidatePhoneMask('12345')).toBe('Número de celular inválido, insira novamente');
  });

  it('should validate if ValidatePhoneHaveNumber9 returns correct message when phone doesn\'t start with 9', () => {
    expect(FormHelper.Validation.ValidatePhoneHaveNumber9('1234567890')).toBe('Ops, o número deve sempre iniciar pelo número 9');
  });

  it('should validate if ValidateFormatDate returns correct message for invalid date format', () => {
    expect(FormHelper.Validation.ValidateFormatDate('32/13/2020')).toBe('Informe uma data válida');
  });

  it('should validate if ValidateDDMMYYYYDate returns correct message for valid date', () => {
    expect(FormHelper.Validation.ValidateDDMMYYYYDate('31/12/2020')).toBe(true);
  });

  it('should validate if ValidateDDMMYYYYDate returns correct message for invalid date', () => {
    expect(FormHelper.Validation.ValidateDDMMYYYYDate('31/13/2020')).toBe('Informe uma data válida');
  });
});
