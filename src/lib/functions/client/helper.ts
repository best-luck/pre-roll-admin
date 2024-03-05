'use client';

export function getRetailerId (): string {
  if (typeof window !== undefined)
    return window?.location?.pathname.split('/')[3];
  return "";
}

export const convertImage = async (event: any) => {
  const file = event.target.files?.[0];

  if (file) {
    try {
      const dataURI: any = await readFileAsync(file);
      const res = dataURI.toString() || '';
      return res
    } catch (error) {
      return null;
    }
  }
};

const readFileAsync = (file: any) => {
  return new Promise((resolve, reject) => {
    const FR = new FileReader();

    FR.addEventListener('load', (evt) => {
      const dataURI = evt?.target?.result;
      resolve(dataURI);
    });

    FR.addEventListener('error', (error) => {
      reject(error);
    });

    FR.readAsDataURL(file);
  });
};