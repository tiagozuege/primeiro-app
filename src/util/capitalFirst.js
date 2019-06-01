/* Funcao para transforar a primeira
 letra de uma string para maiuscula */
 const capitalFirst = str => {
    return str[0].toUpperCase() + str.slice(1);
}

export default capitalFirst;