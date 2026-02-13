export const fileToBuffer = (file: File): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(Buffer.from(reader.result as ArrayBuffer));
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
};
