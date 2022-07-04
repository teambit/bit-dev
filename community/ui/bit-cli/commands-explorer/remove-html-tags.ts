export const removeHtmlTags = (command: string) => {
  const htmlRegex = /(<([^>]+)>)/gi;
  const spacesRegex = /\s\s+/g;
  const commandTxt = command
    .replace(htmlRegex, ' ')
    .replace(spacesRegex, ' ')
    .trim();
  return commandTxt;
};
