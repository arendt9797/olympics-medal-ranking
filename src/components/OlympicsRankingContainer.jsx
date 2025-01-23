import { useState } from 'react'
import InputBar from './InputBar'
import RankingTable from './RankingTable'
import '../styles/olympicsRankingContainer.css'

function OlympicsRankingContainer() {
    // 초기화를 위해 로컬 스토리지에 저장한 값 가져오기
    const getInitialData = () => {
        return JSON.parse(localStorage.getItem('data')) ?? []
    }

    const [country, setCountry] = useState('')
    const [medals, setMedals] = useState({
        gold: '',
        silver: '',
        bronze: '',
    })

    // 로컬 스토리지에서 가져온 값으로 초기화를 해야 렌더링 시 저장된 화면이 출력된다.
    // 함수를 넣으면 초기 렌더링 시 한 번만 실행되고, 리렌더링 때는 다시 호출되지 않는다.
    const [rows, setRows] = useState(getInitialData)

    // 로컬 스토리지 저장과 상태 업데이트를 한 번에 처리하는 함수
    const setRowsAndStorage = (newRows) => {
        setRows(newRows)
        localStorage.setItem('data', JSON.stringify(newRows))
    }

    return (
        <div className="ranking-container">
            <h1>🗼Paris 2024 Olympics</h1>
            {/* 입력 컴포넌트 */}
            <InputBar
                country={country}
                medals={medals}
                rows={rows}
                setCountry={setCountry}
                setMedals={setMedals}
                setRows={setRowsAndStorage} />
            {/* 테이블 컴포넌트 */}
            <RankingTable
                rows={rows}
                setRows={setRowsAndStorage} />
        </div>
    )
}

export default OlympicsRankingContainer