export const validateAlpha = (name) => {
    return {
        name: /^([a-zA-Z ])+$/g.test(name),
    };
}

export const validateAlphaNumeric = (name) => {
    return {
        name: /^([a-zA-Z0-9 ])+$/g.test(name),
    };
}