import { sql } from "@vercel/postgres";

const createBlogCategoriesTable = async () => {
    await sql`
        CREATE TABLE IF NOT EXISTS blogcategories (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            slug VARCHAR(255) NOT NULL
        );
    `;
}

export interface BlogCategory {
    id: number,
    name: string,
    slug: string
}

export default async function getBlogCategories( q: string = '' ) {
  await createBlogCategoriesTable();

  let result;
  if ( q.length > 2 ) {
      result = await sql`
          SELECT * FROM blogcategories WHERE name ILIKE ${'%' + q + '%'};
      `;
  } else {
      result = await sql`
          SELECT * FROM blogcategories;
      `;
      console.log(result);
  }

  const cats = result.rows as BlogCategory[];
  return cats;
}

export async function addBlogCategory(name: string, slug: string) {
  try {
    await sql`INSERT INTO blogcategories (name, slug)
      VALUES (${name}, ${slug})
    `;
    return true;
  } catch(error) {
    return false;
  }
}