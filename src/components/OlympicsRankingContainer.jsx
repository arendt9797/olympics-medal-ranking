import { useState } from 'react'
import InputBar from './InputBar'
import RankingTable from './RankingTable'
import '../styles/olympicsRankingContainer.css'

function OlympicsRankingContainer() {
    // const getInitialData = () => {
    //     return JSON.parse(localStorage.getItem('data')) || []
    // }

    const [country, setCountry] = useState('')
    const [medals, setMedals] = useState({
        gold: '',
        silver: '',
        bronze: '',
    })
    const [rows, setRows] = useState([])

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
                setRows={setRows} />
            {/* 테이블 컴포넌트 */}
            <RankingTable
                rows={rows}
                setRows={setRows} />
        </div>
    )
}

export default OlympicsRankingContainer