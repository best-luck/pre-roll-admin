import { sql } from "@vercel/postgres";

interface Banner {
    id: number;
    heading: string;
    subheading: string;
    image: string;
    mobile_image: string;
    link: string;
    cta: string;
}

const createBannersTable = async () => {
    await sql`
        CREATE TABLE IF NOT EXISTS banners (
            id SERIAL PRIMARY KEY,
            heading TEXT NOT NULL,
            subheading TEXT NOT NULL,
            image TEXT NOT NULL,
            mobile_image TEXT NOT NULL,
            link TEXT NOT NULL,
            cta TEXT NOT NULL
        );
    `;
}

export default async function getBanners() {
    await createBannersTable();

    const result = await sql`SELECT * FROM banners;`;

    return result.rows as Banner[];
}