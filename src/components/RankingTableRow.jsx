import React from 'react'
import CRUDButton from './CRUDButton'

// 테이블 행 컴포넌트
function RankingTableRow({ sortedRows, setRows }) {
    // 버튼 스타일
    const buttonStyle = {
        margin: "auto",
        padding: "0",
        height: "30px",
        width: "50px",
        fontSize: "small",
    }

    // 삭제 버튼 클릭 시 데이터 삭제
    const deleteRowHandler = (id) => {
        const remainedRows = sortedRows.filter((row) => id != row.id)
        setRows(remainedRows)
    }
    
    return (
        <tbody>
            {sortedRows.map((row) => {
                const { id, country, medals } = row
                const totalMedals = medals.gold + medals.silver + medals.bronze
                return <tr key={id}>
                    <td>{country}</td>
                    <td>{medals.gold}</td>
                    <td>{medals.silver}</td>
                    <td>{medals.bronze}</td>
                    <td>{totalMedals}</td>
                    <td><CRUDButton style={buttonStyle} buttonVariant='danger' rowId={row.id} handler={deleteRowHandler}>삭제</CRUDButton></td>
                </tr>
            })}
        </tbody>
    )
}

export default RankingTableRow