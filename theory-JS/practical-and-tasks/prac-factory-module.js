// Exercise 1. Giving value and store it

function createTemperature(initialValue) {

    let temp = initialValue;

    if (temp < -273.15) {
        return {
            error: true,
            reason: "Cant go lower then that"
        }
    };




    function set(value) {
        if (value < -273.15) {
            return {
                error: true,
                reason: "Cant go lower then that"
            }

        };
        temp = value;
        return {
            error: false
        }

    }

    function get() {
        return temp;
    }

    return { set, get };
}

// testing 

const t = createTemperature(-273);

console.log(t.get()); // - 273 (PASS)
t.set(273); // 273 (PASS)
t.set(-273.2); // doesnt change t as value doesnt pass validation, rejected (PASS)
console.log(t.get()); // 273, so value stored (PASS)


// Exercise 2. Checking for method of payment

function createPayment(method) {

    if (!["card", "paypal"].includes(method)) { // validation for acccessible payment method
        throw new Error("Payment method is not supported yet.")
    }

    function pay(amount) {

        if (amount <= 0) {
            throw new Error("Invalid amount")
        }
        switch (method) {
            case "card":
                console.log(`Provide card information to pay ${amount}`);
                break;
            case "paypal":
                console.log(`Provide account informaton to pay ${amount}`);
                break;
        }
    }

    return { pay }
}


// testing 

const paymentCard = createPayment("card");
console.log(paymentCard.pay(200)); // Provide card informatio to pay 200
console.log(paymentCard.pay(-1)); // undefined, Error: Invalid amount


const paymentPP = createPayment("paypal");
console.log(paymentPP.pay(2000)); // Provide account information to pay 2000
console.log(paymentPP.pay(0)); // undefined, Error: Invalid amount

const paymentCash = createPayment("cash");
console.log(paymentCash.pay(10000)); // Error: Payment method is not supported yet.
