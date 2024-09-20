export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center bg-red-400">
            {children}
            <button
                // onClick={() => alert('click')} // server 컴포넌트라서 이벤트 불가능!!
                className="border-[1px] border-[#b86363] rounded-lg px-[12px] py-[8px]"
            >
                버튼. 서버컴포넌트라 아무것도 못해요
            </button>
        </div>
    );
}
