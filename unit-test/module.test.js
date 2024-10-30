import mut from './module.js'; // MUT = Module Under Test

test('Sum -- regular', () => {
    const expected = 30;
    const got = mut.sum(12, 18);
    expect(got).toBe(expected);
});

test('Sum - Negative', () => {
    const expected = -11;
    const got = mut.sum(-12, 1);
    expect(got).toBe(expected);
});

test('Sum - Infinity - Infinity', () => {
    const expected = NaN;
    const got = mut.sum(Infinity, -Infinity);
    expect(got).toBe(expected);
})

test('Sum - Infinity + 50', () => {
    const expected = Infinity;
    const got = mut.sum(Infinity, 50);
    expect(got).toBe(expected);
})

test('Sum - -Infinity - 50', () => {
    const expected = -Infinity;
    const got = mut.sum(-Infinity, -50);
    expect(got).toBe(expected);
})

test('Div - 5 / 2', () => {
    const expected = 2.5;
    const got = mut.div(5, 2);
    expect(got).toBe(expected);
})

test('Div - 5 / 0', () => {
    const expected = Infinity;
    const got = mut.div(5, 0);
    expect(got).toBe(expected);
})

test('Div - 0 / 0', () => {
    const expected = NaN;
    const got = mut.div(0, 0);
    expect(got).toBe(expected);
})

test('Nums - 5', () => {
    const expected = true;
    const got = mut.containsNumbers("5");
    expect(got).toBe(expected);
})
test('Nums - five', () => {
    const expected = false;
    const got = mut.containsNumbers("five");
    expect(got).toBe(expected);
})

test('Nums - -5', () => {
    const expected = true;
    const got = mut.containsNumbers("-5");
    expect(got).toBe(expected);
})

test('Nums - 5.5', () => {
    const expected = true;
    const got = mut.containsNumbers("5.5");
    expect(got).toBe(expected);
})