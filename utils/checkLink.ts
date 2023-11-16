export const checkLink = (url: string | undefined | null): boolean => {
  return url ? url.startsWith('http://') || url.startsWith('https://') : false;
};
