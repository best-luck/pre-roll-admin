import { sql } from "@vercel/postgres";

export interface SettingType {
    id?: number;
    key: string;
    value: string;
}

export interface SettingsType {
    [key: string]: string;
}

const createSettingsTable = async () => {
    await sql`
        CREATE TABLE IF NOT EXISTS settings (
            id SERIAL PRIMARY KEY, 
            key VARCHAR(255) NOT NULL UNIQUE,
            value TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL,
            updated_at TIMESTAMP NOT NULL
        );
    `;
}

export default async function getSettings() {
    await createSettingsTable();

    let result;
    result = await sql`
        SELECT * FROM settings;
    `;

    let settings: SettingsType = {};
    for (const row of result.rows) {
        settings = {
            ...settings,
            [row.key]: row.value
        }
    }
    return settings;
}

export async function getSetting(q: string) {
    const result = await sql`
        SELECT * FROM settings WHERE key=${q} LIMIT 1;
    `;
    return result.rows.length ? result.rows[0].value : "";
}

export async function deleteSetting(id: number) {
    try {
        const result = await sql`
            DELETE FROM settings WHERE id=${id};
        `;
        return true;
    } catch(err) {
        return false;
    }
}

export async function updateSetting(key: string, value: string) {
    try {
        await createSettingsTable();
        const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const res = await sql`
            INSERT INTO settings (key, value, created_at, updated_at)
            VALUES (${key}, ${value}, ${date}, ${date})
            ON CONFLICT (key) DO UPDATE
            SET value = EXCLUDED.value, updated_at = EXCLUDED.updated_at;
        `;
        return {
            message: 'Setting Inserted!',
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