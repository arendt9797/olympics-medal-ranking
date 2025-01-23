// 기준별 비교 함수
const sortByGold = (a, b) => {
    if (a.medals.gold !== b.medals.gold) {
        return b.medals.gold - a.medals.gold
    }
    if (a.medals.silver !== b.medals.silver) {
        return b.medals.silver - a.medals.silver
    }
    return b.medals.bronze - a.medals.bronze
}

const sortBySilver = (a, b) => {
    if (a.medals.silver !== b.medals.silver) {
        return b.medals.silver - a.medals.silver
    }
    if (a.medals.gold !== b.medals.gold) {
        return b.medals.gold - a.medals.gold
    }
    return b.medals.bronze - a.medals.bronze
}

const sortByBronze = (a, b) => {
    if (a.medals.bronze !== b.medals.bronze) {
        return b.medals.bronze - a.medals.bronze
    }
    if (a.medals.gold !== b.medals.gold) {
        return b.medals.gold - a.medals.gold
    }
    return b.medals.silver - a.medals.silver
}

const sortByTotal = (a, b) => {
    const aTotal = a.medals.gold + a.medals.silver + a.medals.bronze
    const bTotal = b.medals.gold + b.medals.silver + b.medals.bronze
    return bTotal - aTotal
}

export { sortByGold, sortBySilver, sortByBronze, sortByTotal }