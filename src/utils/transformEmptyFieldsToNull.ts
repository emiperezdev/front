export default function<T>(data: T): T {
  const transform = (obj: any): any => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        acc[key] = transform(value);
      } else {
        acc[key] = value === '' ? null : value;
      }
      return acc;
    }, {} as any);
  };

  return transform(data) as T;
}
