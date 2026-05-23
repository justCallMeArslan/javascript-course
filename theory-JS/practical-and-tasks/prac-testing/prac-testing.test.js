import { sum, floatingSum, checkStr, checkStr1, cars, fetchData } from "./prac-testing.js";

//numbers

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


// floating

test("floating equation", () => {
    expect(floatingSum(0.5, 0.5, 0.2)).toBeCloseTo(0.8); // max allowable difference is 0.005
});

// strings

test("there is no X in Timoha", () => {
    expect(checkStr).not.toMatch(/X/);
})

test("there is da in Adam", () => {
    expect(checkStr1).toMatch(/da/);
})

// Arrays 

test("is theree a Volvo in cars", () => {
    expect(cars).toContain("Volvo");
    expect(new Set(cars)).toContain("Volvo")
})


// practice from more testing lesson 

it("mock fetch", async () => {
    global.fetch = jest.fn().mockReturnValueOnce({
        json: jest.fn().mockReturnValueOnce({
            id: 1,
            todo: "Hello world!"
        })

    })
    const result = await fetchData();

    expect(result.todo).toBe("Hello world!") //checkig one fetched resuts to makesre we fetch


})