
export const validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validateOneLetterUpperCase = (password) => {
    let re = /(?=.*[A-Z])/.test(password)
    return re;
}

export const validate8digits = (password) => {
    let re = /^.{8,20}$/.test(password)
    return re;
}
export const validateOneNumber = (password) => {
    let re = /(?=.*\d)/.test(password)
    return re;
}

export const validateOneEspecialLetter = (password) => {
    let re = /(?=.*\W)/.test(password)
    return re;
}

export const validatePhone = (phone) => {
    let re = /[0-9]{9}$/;
    return re.test(String(phone).toLowerCase());
}
export const validateDDD = (ddd) => {
    let re = /[0-9]{2}$/;
    return re.test(String(ddd).toLowerCase());
}
