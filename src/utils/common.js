export const delay = async (time) => new Promise(resolve => setTimeout(resolve, time ?? 1000));
