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
      decimal: ".",
      precision: 1,
      thousands: ",",
      ...config,
    };
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
    const result = Number(
      value
        .replaceAll(this.config.thousands, "")
        .replaceAll(this.config.decimal, ".")
    );

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
