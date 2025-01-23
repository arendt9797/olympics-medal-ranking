import React, { useState } from 'react'
import RankingTableRow from './RankingTableRow';
import { Table } from 'react-bootstrap';
import '../styles/RankingTable.css'

// 테이블 컴포넌트
function RankingTable({ rows, setRows }) {
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

    return (
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
                    sortedRows={sortedRows}
                    setRows={setRows} />
            </Table>
        </div>
    )
}

export default RankingTable