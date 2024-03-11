import { sql } from "@vercel/postgres";
import { revalidateCache } from "../functions/server/helper";

export interface CategoryImageType {
    id?: number;
    name: string;
    image: string;
}

const createCategoryImagesTable = async () => {
    await sql`
        CREATE TABLE IF NOT EXISTS categoryimages (
            id SERIAL PRIMARY KEY, 
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
        );
    `;
}

export default async function getCategoryImages() {
    await createCategoryImagesTable();
    const result = await sql`
        SELECT * FROM categoryimages;
    `;

    const images = result.rows as CategoryImageType[];
    return images.reduce((s: any, c: CategoryImageType) => ({...s, [c.name]: c.image}), {});
}

export async function getCategoryImage(name: string) {
    const result = await sql`
        SELECT * FROM categoryimages WHERE name=${name};
    `;
    if (!result.rows.length) return null;
    return result.rows[0] as CategoryImageType;
}

export async function createCategoryImage(data: CategoryImageType) {
    try {
        await createCategoryImagesTable();
        const res = await sql`
          INSERT INTO categoryimages (name, image)
            VALUES (${data.name}, ${data.image});`;
        return {
            message: 'category created!',
            status: 'OK'
        };
    } catch(err) {
        console.log(err);
        return {
            message: 'Something went wrong!',
            status: 'Fail'
        };
    }
}

export async function updateCategoryImage(data: CategoryImageType) {
  try {
    await createCategoryImagesTable();
    const res = await sql`
        UPDATE categoryimages
            SET image=${data.image}
            WHERE name=${data.name};`;
    return {
        message: 'Category Image Updated!',
        status: 'OK'
    };
  } catch(err) {
    return {
        message: 'Something went wrong!',
        status: 'Fail'
    };
  }
}

export async function putCategoryImage(data: CategoryImageType) {
  try {
    let existing = await getCategoryImage(data.name);
    console.log(existing);
    if (existing) {
      await updateCategoryImage(data);
    } else {
      await createCategoryImage(data);
    }
    revalidateCache();
  } catch(err) {
    console.log(err);
  }
}