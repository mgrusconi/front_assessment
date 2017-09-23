/**
 * Filtro de normalizacion de Texto.
 * String normalizer Filter.
 *
 * @author Marcelo G. Rusconi <mgrusconi@gmail.com>
 */

export function normalize() {
    return function (input: string) {
        if (!input) return "";

        input = input
        .replace(" ", "")
        .replace(/\W+/g, "");
        return input.toLowerCase();
    };
}
