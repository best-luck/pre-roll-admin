import { sql } from "@vercel/postgres";

interface Blog {
    id: number;
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    image: string;
    meta_title: string;
    meta_description: string;
    category_id: string;
    created_at: string;
    updated_at: string;
}

const createBlogsTable = async () => {
    await sql`
        CREATE TABLE IF NOT EXISTS blogs (
            id SERIAL PRIMARY KEY, 
            author VARCHAR(255) NOT NULL,
            excerpt TEXT NOT NULL,
            title VARCHAR(255) NOT NULL,
            slug VARCHAR(255) NOT NULL,
            content TEXT NOT NULL, 
            image TEXT NOT NULL,
            meta_title VARCHAR(255) NOT NULL,
            meta_description VARCHAR(255) NOT NULL,
            category_id INT NOT NULL,
            created_at TIMESTAMP NOT NULL,
            updated_at TIMESTAMP NOT NULL
        );
    `;
}

export default async function getBlogs( q: string ) {
    await createBlogsTable();

    let result;
    if ( q.length > 2 ) {
        result = await sql`
            SELECT * FROM blogs WHERE title ILIKE ${'%' + q + '%'};
        `;
    } else {
        result = await sql`
            SELECT * FROM blogs;
        `;
    }

    const blogs = result.rows as Blog[];
    return blogs;
}