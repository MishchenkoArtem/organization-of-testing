export const checkLuhn = (numbers) => {
    const num = numbers;
    let sum = 0;

    const parity = num.length % 2;

    for (let i = 0; i < num.length; i += 1) {
        let digit = Number(num[i]);
        if (i % 2 === parity) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }

    return Number(sum % 10) === 0;
};
