/**
 * Uppercase the first letter of word!
 * usage: Str.title("     ahmet cAN    ") -> "Ahmet CAN"
 */
export function title(value: string | string[]): string {
  if (["string", "object"].includes(typeof value)) {
    if (typeof value === "object") {
      value.forEach((val, i) => {
        if (typeof val !== "string")
          throw new TypeError(
            `Are Expected types of value is string or string[] but not ${typeof val}`
          );
        const digits = val.trim().split("");
        digits[0] = digits[0].toUpperCase();
        value[i] = digits.join("");
      });
      return value.join(" ");
    } else {
      const vault = value.trim().split(" ");
      vault.forEach((val, i) => {
        if (typeof val !== "string")
          throw new TypeError(
            `Are Expected types of value is string or string[] but not ${typeof val}`
          );
        const digits = val.split("");
        digits[0] = digits[0].toUpperCase();
        vault[i] = digits.join("");
      });
      return vault.join(" ");
    }
  }

  throw new TypeError(
    `Are Expected types of value is string or string[] but not ${typeof value}`
  );
}
