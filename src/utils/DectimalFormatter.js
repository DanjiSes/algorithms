class DectimalFormatter {
  /**
   * Devuelve el número especificado formateado con los separadores especificados.
   *
   * @param {Object}  config           Configuración para modificar el resultado.
   * @param {String}  config.decimal   Símbolo a usar para el punto decimal (`,` por defecto).
   * @param {Number}  config.precision Número de dígitos decimales a mostrar (`2` por defecto).
   * @param {String}  config.thousands Separador de miles ('.' por defecto).
   *
   * @return {String} Número formateado.
   */
  constructor(config) {
    this.config = {
      decimal: ",",
      precision: 1,
      thousands: " ",
      ...config,
    };
  }

  /**
   * @param {string} str
   */
  isValidString(str) {
    str = str
      .trim()
      .replace(new RegExp(this.config.thousands, "gm"), "")
      .replace(new RegExp(this.config.decimal, "gm"), ".");

    if (!str) return true;

    const regex = new RegExp(`^(\\d*)(\\.?)(\\d*)$`, "gm");

    return !!str.match(regex)?.join("");
  }

  /**
   * @param {number} value
   * @returns {string}
   */
  format(value) {
    if (!Number.isFinite(value)) {
      return "";
    }

    value =
      Math.floor(value * Math.pow(10, this.config.precision)) /
      Math.pow(10, this.config.precision);

    const parts = value.toString().split(".");

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.config.thousands);

    return parts.join(this.config.decimal);
  }

  /**
   * @param {string} value
   */
  parse(value) {
    const result = value
      .replace(new RegExp(this.config.thousands, "gm"), "")
      .replace(new RegExp(this.config.decimal, "gm"), ".");

    if (Number.isNaN(result)) {
      throw new TypeError(`You MUST pass a valid number format`);
    }

    return (
      Math.floor(result * Math.pow(10, this.config.precision)) /
      Math.pow(10, this.config.precision)
    );
  }
}

module.exports = DectimalFormatter;

const formatter1 = new DectimalFormatter({
  thousands: " ",
  decimal: ",",
  precision: 2,
});

// 123 -> 123
console.log(formatter1.format(123));

// 1234 -> 1 234
console.log(formatter1.format(1234));

// 123456 -> 123 456
console.log(formatter1.format(123456));

// 1234567 -> 1 234 567
console.log(formatter1.format(formatter1.parse("1234567")));

// 1. -> 1.
console.log(formatter1.format(formatter1.parse("1.")));

// 1.1 -> 1,1
console.log(formatter1.format(formatter1.parse("1.1")));

// 1,1 -> 1,1
console.log(formatter1.format(formatter1.parse("1,1")));

// 1234.5 -> 1 234,5
console.log(formatter1.format(formatter1.parse("1234.")));

console.log(formatter1.format(null));

// .1 -> 0.1
// . -> .

// .. -> .

// abc -> ""
// 123a -> 123

// 123.2. -> 123,2
