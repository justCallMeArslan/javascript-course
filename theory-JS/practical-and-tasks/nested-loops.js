// exercise number 1:

// Can you write nested loops that print:

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j + " "

    }

    console.log((line));

}

// A good next challenge is to print:

// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 5; j >= 6 - i; j--) {
        line += j + " "

    }

    console.log((line));

}