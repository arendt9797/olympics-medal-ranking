import React, { useState } from 'react'
import RankingTableRow from './RankingTableRow';
import ExceptionModal from './ExceptionModal';
import { Table } from 'react-bootstrap';
import '../styles/RankingTable.css'

// 테이블 컴포넌트
function RankingTable({ rows, setRows }) {
    [show, setShow] = useState(false)

    const showModalHandler = () => setShow(true)

    // 추가된 국가가 없으면 비어있음 표시
    if (rows.length < 1) {
        return <div>아직 데이터가 없습니다. 국가와 메달을 추가해 보세요!</div>
    }

    // 데이터 정렬
    const sortedRows = structuredClone(rows).sort((a, b) => {
        if (a.medals.gold !== b.medals.gold) {
            return b.medals.gold - a.medals.gold
        }
        if (a.medals.silver !== b.medals.silver) {
            return b.medals.silver - a.medals.silver
        }
        return b.medals.bronze - a.medals.bronze
    })

    // 정렬된 데이터로 상태 업데이트
    setRows(sortedRows)

    return (
        <>
            <div className='ranking-table'>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>국가</th>
                            <th>🥇금메달</th>
                            <th>🥈은메달</th>
                            <th>🥉동메달</th>
                            <th>액션</th>
                        </tr>
                    </thead>
                    {/* 테이블 행 컴포넌트 */}
                    <RankingTableRow 
                        rows={rows} 
                        setRows={setRows}/>
                </Table>
            </div>
            {/* 모달 컴포넌트 */}
            <ExceptionModal show={show}/>
        </>
    )
}

export default RankingTable