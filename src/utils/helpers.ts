export const getRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

export const getUniqueTime = () => {
  const now = new Date();
  return `${now.getDate()}${now.getHours()}${now.getMinutes()}`;
};

/**
 * Replace Params
 * /dashboard/:section => dashboard/profile
 */

export const buildPath = (pattern: string, params: Record<string, string>) => {
  if (!pattern || !params) {
    return "";
  }

  const paths = pattern.split("/");
  return paths
    .map((path) => {
      return path.startsWith(":") ? params[path.replace(":", "")] : path;
    })
    .join("/");
};
