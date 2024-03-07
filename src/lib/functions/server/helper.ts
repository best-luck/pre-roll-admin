import fs from 'fs';
import path from 'path';

export const saveBufferToFile = (location: string, buffer: Buffer) => {
  return new Promise((resolve: any, reject: any) => {
    fs.writeFile(path.join(process.cwd(), location), buffer, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};