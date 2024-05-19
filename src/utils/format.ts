export const firstCapitalize = (input: string) =>
  `${input.charAt(0).toUpperCase()}${input.slice(1)}`;

export const toCssVariable = (input: string, prefix: string = "usy") => {
  const bunOfChars = input.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  );
  const linkCase = (bunOfChars || []).map((s) => s.toLowerCase()).join("-");

  return `--${prefix}-${linkCase}`;
};
