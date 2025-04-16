const isMock = import.meta.env?.IS_MOCK_ACTIVE;

export default class Helper {
    static isTestMode() {
        console.log({ env: import.meta.env })
        return isMock === 'true';
    }

    static isEmpty(val) {
        return val === '' || val === null || val === undefined;
    }

    static isNotEmpty(val) {
        return !this.isEmpty(val);
    }

    static isDefined(val) {
        return val !== null && val !== undefined;
    }

    static isNotDefined(val) {
        return !this.isDefined(val);
    }

    static removeSpecialCharsFromString(val) {
        return val.replace(/[^\w\s]/gi, '');
    }



    static parseDdMmYyyyToIsoDate(dateString) {
        const [day, month, year] = dateString.split('/').map(Number);
        const date = new Date(Date.UTC(year, month - 1, day));
        return date.toISOString();
    }


    static isValidEmail(v) {
        return (
            Helper.isDefined(v) && Helper.isNotEmpty(v) &&
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                v
            )
        );
    }

    static isValidPhone(v) {
        return (
            Helper.isDefined(v) && Helper.isNotEmpty(v) &&
            /^\(?[1-9]{2}\)?\s?9[0-9]{4}-?[0-9]{4}$/
                .test(v)
        );
    }

    static isValidCpf(value) {
        if (!value) return false;
        const cpf = value.toString().replace(/\D/g, '');
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf.charAt(i)) * (10 - i);
        }
        const firstCheckDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (parseInt(cpf.charAt(9)) !== firstCheckDigit) return false;

        sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf.charAt(i)) * (11 - i);
        }
        const secondCheckDigit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        return parseInt(cpf.charAt(10)) === secondCheckDigit;
    }

    static isValidCnpj(cnpj) {
        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj === '') return false;

        if (cnpj.length !== 14) return false;

        // Eliminates known invalid CNPJs

        if (
            cnpj === '00000000000000' ||
            cnpj === '11111111111111' ||
            cnpj === '22222222222222' ||
            cnpj === '33333333333333' ||
            cnpj === '44444444444444' ||
            cnpj === '55555555555555' ||
            cnpj === '66666666666666' ||
            cnpj === '77777777777777' ||
            cnpj === '88888888888888' ||
            cnpj === '99999999999999'
        )
            return false;

        let cnpjLength = cnpj.length - 2;
        let cnpjNumbers = cnpj.substring(0, cnpjLength);
        const cnpjDigits = cnpj.substring(cnpjLength);
        let sum = 0;
        let position = cnpjLength - 7;

        // Checking first verifying digit
        for (let i = cnpjLength; i >= 1; i--) {
            sum += Number(cnpjNumbers.charAt(cnpjLength - i)) * position--;
            if (position < 2) position = 9;
        }

        let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (result.toString() !== cnpjDigits.charAt(0)) return false;

        // Checking second verifying digit
        cnpjLength = cnpjLength + 1;
        cnpjNumbers = cnpj.substring(0, cnpjLength);
        sum = 0;
        position = cnpjLength - 7;

        for (let i = cnpjLength; i >= 1; i--) {
            sum += Number(cnpjNumbers.charAt(cnpjLength - i)) * position--;
            if (position < 2) position = 9;
        }

        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (result.toString() !== cnpjDigits.charAt(1)) return false;

        return true;
    }
}


