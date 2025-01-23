import React, { useState } from 'react'
import RankingTableRow from './RankingTableRow';
import * as compare from '../util/SortByMedal';
import { Table } from 'react-bootstrap';
import '../styles/RankingTable.css'

// 테이블 컴포넌트
function RankingTable({ rows, setRows }) {
    // 정렬 기준에 필요한 상태
    const [sortConfig, setSortConfig] = useState({
        key: 'gold',
        compareFunction: compare.sortByGold,
    })

    // 추가된 국가가 없으면 비어있음 표시
    if (rows.length < 1) {
        return <div>아직 데이터가 없습니다. 국가와 메달을 추가해 보세요!</div>
    }

    // 기준에 따라 데이터 정렬
    const sortingHandler = (key, compareFunction) => {
        setSortConfig({ key, compareFunction })
    }

    // 정렬된 배열 생성
    const sortedRows = structuredClone(rows).sort(sortConfig.compareFunction)
    
    // 클릭된 상태인지 확인
    const currentSort = (key) => {
        return sortConfig.key === key ? '▼' : '▽'
    }

    return (
        <div className='ranking-table'>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>국가</th>
                        <th>🥇금메달
                            <span
                                onClick={ () => sortingHandler('gold', compare.sortByGold) }
                                className='sort-by-medal'>
                                {currentSort('gold')}
                            </span>
                        </th>
                        <th>🥈은메달
                            <span
                                onClick={ () => sortingHandler('silver', compare.sortBySilver) }
                                className='sort-by-medal'>
                                {currentSort('silver')}
                            </span>
                        </th>
                        <th>🥉동메달
                            <span
                                onClick={ () => sortingHandler('bronze', compare.sortByBronze) }
                                className='sort-by-medal'>
                                {currentSort('bronze')}
                            </span>
                        </th>
                        <th>합계
                            <span
                                onClick={ () => sortingHandler('total', compare.sortByTotal) }
                                className='sort-by-medal'>
                                {currentSort('total')}
                            </span>
                        </th>
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