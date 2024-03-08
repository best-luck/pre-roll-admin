import { sql } from "@vercel/postgres";

export interface BannerType {
    id?: number;
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

    return result.rows as BannerType[];
}

export async function createBanner(data: BannerType) {
    await createBannersTable();

    try {
        const result = await sql`INSERT INTO banners (heading, subheading, image, mobile_image, link, cta)
                VALUES (${data.heading}, ${data.subheading}, ${data.image}, ${data.mobile_image}, ${data.link}, ${data.cta});`;
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function deleteBannerAction(id: number) {
    try {
        const result = await sql`DELETE FROM banners WHERE id=${id}`;
        return true;
    } catch (err) {
        return false;
    }
}

export async function getBanner(id: number) {
    const result = await sql`
        SELECT * FROM banners WHERE id=${id} LIMIT 1;
    `;
    return result.rows[0] as BannerType;
}

export async function updateBanner(data: BannerType) {
    await createBannersTable();

    try {
        const result = await sql`
        UPDATE banners
            SET heading=${data.heading},
                subheading=${data.subheading},
                image=${data.image},
                mobile_image=${data.mobile_image},
                link=${data.link},
                cta=${data.cta}
            WHERE id=${data.id}`;
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}