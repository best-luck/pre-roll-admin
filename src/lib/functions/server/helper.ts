import fs from 'fs';

export const saveBufferToFile = (path: string, buffer: Buffer) => {
  return new Promise((resolve: any, reject: any) => {
    fs.writeFile(path, buffer, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};