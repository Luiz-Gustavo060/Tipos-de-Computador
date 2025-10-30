/**
 * VALIDAÇÃO DE E-MAIL
 * Usa uma Expressão Regular (Regex) para checar o formato básico do e-mail.
 * @param {string} email - O valor do campo de e-mail.
 * @returns {boolean} - Retorna true se o e-mail for válido, false caso contrário.
 */
function validarEmail(email) {

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const emailLimpo = email.trim();

    return regexEmail.test(emailLimpo);
}


/**
 * VALIDAÇÃO DE TELEFONE
 * Esta função valida um formato de telefone comum no Brasil, permitindo opcionalmente
 * parênteses, espaços e traços, focando no total de 10 ou 11 dígitos (com ou sem o 9º dígito).
 *
 * @param {string} telefone - O valor do campo de telefone (pode estar formatado).
 * @returns {boolean}
 */
function validarTelefone(telefone) {
    if (!telefone) {
        return false;
    }

    const apenasDigitos = telefone.replace(/[^\d+]/g, '');

    let comprimentoValido = false;

    if (apenasDigitos.startsWith('+')) {

        if (apenasDigitos.length >= 10 && apenasDigitos.length <= 15) {
            comprimentoValido = true;
        }
    } else {

        if (apenasDigitos.length === 10 || apenasDigitos.length === 11) {
            comprimentoValido = true;
        }
    }

    return comprimentoValido;
}

console.log("--- TESTE DE E-MAIL ---");
console.log(`teste@exemplo.com: ${validarEmail("teste@exemplo.com")}`);
console.log(`invalido@: ${validarEmail("invalido@")}`);
console.log(`outro.teste@dominio.com.br: ${validarEmail("outro.teste@dominio.com.br")}`);

console.log("\n--- TESTE DE TELEFONE (BR) ---");
console.log(`(62) 98765-4321: ${validarTelefone("(11) 98765-4321")}`);
console.log(`1133334444: ${validarTelefone("1133334444")}`);
console.log(`+5511987654321: ${validarTelefone("+5511987654321")}`);
console.log(`12345: ${validarTelefone("12345")}`);
