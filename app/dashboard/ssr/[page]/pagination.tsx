'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pagination() {
    const [page, setPage] = useState(1);
    const router = useRouter();

    function handleChangePage(e: any) {
        setPage(e.target.value);
    }

    function handleSubmit() {
        router.push(`/dashboard/ssr/${page}`);
    }

    return (
        <div className="flex flex-col p-[8px]">
            <input type="text" value={page} onChange={handleChangePage} />
            <button onClick={handleSubmit}>페이지 이동</button>
            <button onClick={() => router.push(`/dashboard/csr/${page}`)}>클라이언트 컴포넌트로 이동</button>
        </div>
    );
}
