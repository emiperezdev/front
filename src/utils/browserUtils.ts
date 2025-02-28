export const isSafari = () => {
  return (
    navigator.userAgent.search('Safari') >= 0 &&
    navigator.userAgent.search('Chrome') < 0
  );
};

export const saveToSessionStorage = <TItem>(key: string, item: TItem): void => {
  const jsonElement = JSON.stringify(item);
  window.sessionStorage.setItem(key, jsonElement);
};

export const getFromSessionStorage = <TItem>(
  key: string,
): TItem | undefined => {
  const jsonItem = window.sessionStorage.getItem(key);
  return jsonItem ? (JSON.parse(jsonItem) as TItem) : undefined;
};

export const removeFromSessionStorage = (key: string): void => {
  window.sessionStorage.removeItem(key);
};
