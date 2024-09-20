async function getCardList() {
    return [1, 2, 3];
}

export default async function dashboard() {
    const cardList = await getCardList();

    return (
        <div>
            <p>Dashboard</p>
            {cardList.map((card) => (
                <div key={card}>{card}</div>
            ))}
        </div>
    );
}
