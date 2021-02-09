class Validation {

    static isValidName(name) {
        // ne tuscias tekstas
        if (!Validation.isNonEmptyText(name)) {
            return 'Vardas turi buti ne tuscias.';
        }

        // nei priekyje nei gale nera tarpu
        if (!Validation.noSpacesAround(name)) {
            return 'Vardo priekyje ir gale negali buti tarpus';
        }

        // negali buti daugiau nei viena zodis (nera tarpu)
        if (!Validation.isSingleWord(name)) {
            return 'Vardas turi buti vienas zodis';
        }

        // pirma raide didzioji
        if (!Validation.isFirstLetterUpperCase(name)) {
            return 'Vardo pirmoji raide turi buti didzioji'
        }

        // visos likusios tik mazosios
        if (!Validation.isLowercaseButFirst(name)) {
            return 'Vardo visos raides isskyrus pirma, turi buti mazosios.';
        }

        //sudarytas tik is raidziu (nekreipiant demesio i tikslias abeceles)
        if (!Validation.onlyAlphabetLetters(name)) {
            return 'Varde gali buti tik abeceles simboliai.';
        }


        // tik abeceles raides (galimybe nurodyti kokios abeceles yra priimtinos)
        return true;
    }

    static isValidEmail(email) {
        // ne tuscias tekstas
        if (!Validation.isNonEmptyText(email)) {
            return 'Email turi buti ne tuscias.';
        }

        // nei priekyje nei gale nera tarpu
        if (!Validation.noSpacesAround(email)) {
            return 'Email priekyje ir gale negali buti tarpus';
        }

        // butinas ir tik vienas @ simbolis
        if (!Validation.textContainsLetter(email, '@')) {
            return 'Email turi tureti viena @ simboli.';
        }

        const emailParts = email.split('@');
        // pries @ (lokali dalis) turi buti - ne tuscias tekstas
        // uztenka patikrinti ar pirmas simbolis nera @
        if (!Validation.isNonEmptyText(emailParts[0])) {
            return 'Email lokali dalis negali buti tuscia.';
        }

        // uz @ (domeno dalis) turi buti ne tuscias tekstas
         // uztenka patikrinti ar paskutinis simbolis nera @
        if (!Validation.isNonEmptyText(emailParts[1])) {
            return 'Email domaino dalis negali buti tuscia.';
        }

        return true;
    }

    static isValidText(text) {
        // ne tuscias tekstas
        if (!Validation.isNonEmptyText(text)) {
            return 'Tekstas turi buti ne tuscias.';
        }
        return true;
        // nei priekyje nei gale nera tarpu

    }




    static isNonEmptyText(text) {
        if (typeof text !== 'string' ||
            text === '') {
                return false;
        }
        return true;
    }

    static isSingleWord(text) {
        if (text.includes(' ')) {
            return false;
        }
        return true;
    }

    static isFirstLetterUpperCase(text) {
        return text[0] === text[0].toUpperCase();
    }

    static noSpacesAround(text) {
        return text === text.trim();
    }
    static isLowercaseButFirst(text) {
        const rest = text.slice(1);
        return rest === rest.toLowerCase();
    }

    static textContainsLetter(text, letter, count = 1) {
        let letterCount = 0;
        for (let symbol of text) {
            if (symbol === letter) {
                letterCount++;
            }
        }

        // letterCount = text.split().filter(symbol => symbol === letter).length;

        return letterCount === count;
    }
    static onlyAlphabetLetters(text) {
        const upperCase = text.toUpperCase();
        const lowerCase = text.toLowerCase();
        const size = text.length;
        for (let i=0; i<size;i++) {
            if (upperCase[i] === lowerCase[i]) {
                return false;
            }
        }
        return true;
    }
}

export { Validation }