import { sql } from "@vercel/postgres";

export interface BlogType {
    id?: number;
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    image: string;
    meta_title: string;
    meta_description: string;
    category_id: number;
    author: string;
    created_at?: string;
    updated_at?: string;
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

    const blogs = result.rows as BlogType[];
    return blogs;
}

export async function getBlog(slug: string) {
    const result = await sql`
        SELECT * FROM blogs WHERE slug=${slug} LIMIT 1;
    `;
    return result.rows[0] as BlogType;
}

export async function deleteBlog(id: number) {
    try {
        const result = await sql`
            DELETE FROM blogs WHERE id=${id};
        `;
        return true;
    } catch(err) {
        return false;
    }
}

export async function createBlog(data: BlogType) {
    try {
        await createBlogsTable();
        const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const res = await sql`INSERT INTO blogs (title, author, slug, content, excerpt, image, meta_title, meta_description, category_id, created_at, updated_at)
                VALUES (${data.title}, ${data.author}, ${data.slug}, ${data.content}, ${data.excerpt}, ${data.image}, ${data.meta_title}, ${data.meta_description}, ${data.category_id}, ${date}, ${date});`;
        return {
            message: 'Blog created!',
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

export async function updateBlog(data: BlogType) {
    try {
        await createBlogsTable();
        const res = await sql`
            UPDATE blogs
                SET title=${data.title},
                    author=${data.author},
                    slug=${data.slug},
                    content=${data.content},
                    excerpt=${data.excerpt},
                    image=${data.image},
                    meta_title=${data.meta_title},
                    meta_description=${data.meta_description},
                    category_id=${data.category_id}
                WHERE id=${data.id};`;
        return {
            message: 'Blog Updated!',
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