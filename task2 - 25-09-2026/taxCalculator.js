const checkout = (price) => {
    const taxRate = 0.10;

    const calculateTax = (amount) => {
        return amount * taxRate;
    }

    const tax = calculateTax(price);

    const total = price + tax;

    return total;
}

console.log("Total Amount:", checkout(1000))