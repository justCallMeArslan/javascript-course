export function sum(a, b) {
    return a + b
}


export function floatingSum(x, y, z) {
    return x + y - z;
}


export const checkStr = "Timoha";

export const checkStr1 = "Adam";

export const cars = ["BMW", "Audi", "Merc", "Volvo", "VW", "Porsche"];


// practice from more testing

export const fetchData = async () => {
    const response = await fetch('https:placeholder.com');
    const data = await response.json();

    return data
}