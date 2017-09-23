export function normalize() {
    return function (input: string) {
        if (!input) return "";

        input = input
        .replace(" ", "")
        .replace(/\W+/g, "");
        return input.toLowerCase();
    };
}
