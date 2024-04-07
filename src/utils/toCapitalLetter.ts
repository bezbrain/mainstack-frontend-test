export const toCapitalLetter = (text: string) => {
  const firstChar = text.charAt(0);
  const firstCharToUppercase = firstChar.toUpperCase();

  const restText = text.slice(1, text.length);
  const capitalized = firstCharToUppercase + restText;

  return capitalized;
};
