import Pagination from './pagination';
import mysql from 'mysql2';
// const mysql = require('mysql');

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

async function handler(req: any) {
    let queryString = `SELECT seq FROM t_doc`;

    try {
        const rows = await queryPromise(queryString);
        return rows;
    } catch (error) {
        console.error(error);
        return 0;
    }
}

async function getCardListByDB(page: number) {
    const result = [];

    const count = await handler(page);

    for (let i = 0; i < count.length; i++) {
        result.push(count[i].seq);
    }

    return result;
}

async function getCardListByAPI(page: number) {
    const result = [];

    const res = await fetch(`http://localhost:3000/api/doc`, { cache: 'no-store' });
    const count: { seq: number; name: string }[] = await res.json();

    console.log(count); // 서버에 로그가 찍힘

    for (let i = 0; i < count.length; i++) {
        result.push(count[i].seq + ' ' + count[i].name);
    }

    return result;
}

function getCardList(page: number) {
    const result = [];

    for (let i = 0; i < 3; i++) {
        result.push(page + i * 3);
    }

    return result;
}

export default async function DashboardItemPage({ params }: { params: { page: string } }) {
    // const cardList = await getCardList(parseInt(params.page || '1'));
    // const cardList = await getCardListByDB(parseInt(params.page || '1'));
    const cardList = await getCardListByAPI(parseInt(params.page || '1'));

    return (
        <div className="flex flex-col gap-[20px]">
            <p>Dashboard</p>
            {cardList.map((card) => (
                <div key={card}>{card}</div>
            ))}
            <button className="border-[1px] border-[#F00] rounded-lg px-[12px] py-[8px]">버튼입니다</button>
            <Pagination />
        </div>
    );
}
