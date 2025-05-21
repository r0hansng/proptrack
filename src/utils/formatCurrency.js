const formatCurrency = (amount, currency = 'USD', locale = 'en-US', fractionDigits = 0) => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        maximumFractionDigits: fractionDigits,
    }).format(amount);
};

export { formatCurrency };