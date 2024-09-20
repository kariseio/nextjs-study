'use client';

import { useEffect, useState } from 'react';
import Pagination from './pagination';

export default function ClientPage({ params }: { params: { page: string } }) {
    const [cardList, setCardList] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:3000/api/doc`);

            const result = [];

            const count: { seq: number; name: string }[] = await res.json();

            for (let i = 0; i < count.length; i++) {
                result.push(count[i].seq + ' ' + count[i].name);
            }

            setCardList(result);
        };

        fetchData();
        console.log('fetch'); // client에 로그가 찍힘
    }, []);

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
