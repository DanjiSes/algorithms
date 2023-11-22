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

  format(value) {
    if (!Number.isFinite(value)) {
      throw new TypeError(
        `You MUST specify a finite number, not [${typeof value} = ${value}]`
      );
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

const formatter1 = new DectimalFormatter({
  thousands: " ",
  decimal: ",",
  precision: 2,
});

const userInput = "1.";

console.log(formatter1.isValidString(userInput)); // if false -> prevent
console.log(formatter1.parse(userInput));

module.exports = DectimalFormatter;
