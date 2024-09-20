import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: '3.39.96.86',
    port: 3306,
    user: 'hectolab01',
    password: 'Cjttjqj2024!',
    database: 'kms',
});

function queryPromise(queryString: string): Promise<any> {
    return new Promise((resolve, reject) => {
        connection.query(queryString, (error: any, results: any) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

async function handler(seq: number) {
    let queryString = `SELECT * FROM t_doc`;
    // let queryString = `SELECT * FROM t_doc WHERE seq = ${seq}`;

    try {
        const rows = await queryPromise(queryString);
        return rows;
    } catch (error) {
        console.error(error);
        return 0;
    }
}

export async function GET(request: Request) {
    let data = await handler(1);

    return Response.json(data);
}
