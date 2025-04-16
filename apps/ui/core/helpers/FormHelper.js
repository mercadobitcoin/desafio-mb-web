import Helper from './Helper'

export default class FormHelper {
  static Validation = {
    NotEmpty(v) {
      return (typeof v === 'string' ? v.trim() !== '' : !!v) || 'Preenchimento obrigatório';
    },

    Required(text) {
      return (v) =>
        (!!v && v !== '' && v !== undefined) || (text || 'Preenchimento obrigatório');
    },

    NoEmptySpace(v) {
      return !/^.+\s.+$/g.test(v) || 'Não pode conter espaço em branco';
    },

    ValidateRG(v) {
      return /(^\d{1,2}).?(\d{3}).?(\d{3}|\d{2})-?(\d{1}|X|x$)?/.test(v) || 'Informe um RG válido';
    },

    ValidateCNH(v) {
      return (v && v.length === 11) || 'Informe uma CNH válida';
    },

    ValidateCEP(text) {
      return (v) =>
        /(^[0-9]{5})-?([0-9]{3}$)/.test(v) || (text || 'Informe um CEP válido');
    },

    ValidateCPF(v) {
      return Helper.isValidCpf(v) || 'Insira um CPF válido';
    },

    ValidateEmail(v) {
      if (!v) return true;
      return Helper.isValidEmail(v) || 'E-mail informado não é válido';
    },

    ValidatePhoneMask(v) {
      return Helper.isValidPhone(v) ||
        'Número de celular inválido, insira novamente';
    },

    ValidatePhoneHaveNumber9(v) {
      return (v && v[3] === '9') || 'Ops, o número deve sempre iniciar pelo número 9';
    },

    ValidateFormatDate(v) {
      return /^(?:0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(v) || 'Informe uma data válida';
    },

    ValidateDDMMYYYYDate(v) {
      if (v) {
        const parts = v.split('/').map(p => parseInt(p, 10));
        const day = parts[0];
        const month = parts[1] - 1;
        const year = parts[2];
        const d = new Date(year, month, day);
        return (d.getFullYear() === year && d.getMonth() === month && d.getDate() === day) || 'Informe uma data válida';
      }
      return 'Informe uma data válida';
    }
  };
}


