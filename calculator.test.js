// import { expect, test } from '@jest/globals'; //FORA DE MÓDULO
// import * as calculator from './calculator.js'; //FORA DE MÓDULO

const calculator = require('./calculator');

test("testando a soma de 1+1", () => {
    expect(calculator.soma(1,1)).toBe(2);
})

test("testando divisão de 42/6", () => {
    expect(calculator.divisao(42,6)).toBe(7);
})

test("testando a soma de 5+5", () => {
    expect(calculator.soma(5,5)).toBe(10);
})