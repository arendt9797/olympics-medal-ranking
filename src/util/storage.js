// 초기화를 위해 로컬 스토리지에 저장한 값 가져오기
const getInitialData = () => {
    return JSON.parse(localStorage.getItem('data')) ?? []
}

// 로컬 스토리지 저장과 상태 업데이트를 한 번에 처리하는 함수
const setData = (setState) => (newRows) => {
    setState(newRows)
    localStorage.setItem('data', JSON.stringify(newRows))
}

export { getInitialData, setData }