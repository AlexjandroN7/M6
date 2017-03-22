describe("MathUtils", function() {
  var calculadora;

 beforeEach(function() {
  calculadora = new MathUtils();
  });

  describe("operaciones matematicas", function() {
    it("Calcular suma de 2 y 4", function() {
    expect(calculadora.sumar(2,4)).toEqual(6)
    });
    it("resta de 1 y 4", function() {
      expect(calculadora.restar(4,1)).toEqual(3)
    });
      it("multiplicacion de 2 y 4", function() {
      expect(calculadora.multiplicar(4,2)).toEqual(8)
    });
        it("division de 2 y 4", function() {
      expect(calculadora.dividir(4,2)).toEqual(2)
    });
          it("media de 4 y 8", function() {
      expect(calculadora.media(4,8)).toEqual(8)
    });
 


});
});