import totalizador from "./Totalizador";

describe("Totalizador", () => {
    it("deberia retornar el precio neto(cantidad de items*precio por item)", () => {
        expect(totalizador(3,200)).toBe("cantidad de items: 3 precio por item: 200 precio neto(3*$200): 600");
    });


  });