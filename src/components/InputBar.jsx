import React, { useState } from 'react'
import CRUDButton from './CRUDButton'
import ExceptionModal from './ExceptionModal'
import '../styles/InputBar.css'

// 입력 컴포넌트
function InputBar({ country, medals, rows, setCountry, setMedals, setRows }) {
    const [show, setShow] = useState(false)

    const showModalHandler = () => setShow(true)

    // 버튼 스타일
    const style = {
        marginBottom: "4px",
        height: "40px",
        width: "100px"
    }

    // 국가 상태 업데이트
    const onCountryChange = (e) => {
        setCountry(e.target.value)
    }

    // 메달 개수 상태 업데이트
    // 양수의 숫자만 가능하도록 설정
    const onMedalsChange = (e) => {
        if (isNaN(e.target.value) || e.target.value < 0) {
            e.target.value = 0
        }

        const medal = e.target.id
        setMedals({
            ...medals,
            [medal]: Number(e.target.value)
        })
    }

    // 국가 추가 버튼 클릭 시 테이블 데이터 추가
    const addRowHandler = () => {
        rows.find((row) => row.country === country) ?? showModalHandler()
        setRows([...rows, { country, medals, id: crypto.randomUUID() }])
        setCountry('')
        setMedals({ gold: '', silver: '', bronze: '' })
    }

    // 업데이트 버튼 클릭 시 테이블 업데이트
    const updateRowHandler = () => {
        const updatedRows = rows.map((row) => {
            if (row.country === country) {
                row.medals = medals
            }
            return row
        })
        setRows(updatedRows)
        setCountry('')
        setMedals({ gold: '', silver: '', bronze: '' })
    }

    return (
        <>
            <div className='input-bar-container'>
                <form className='input-bar'>
                    <div className='input-element'>
                        <div>국가명</div>
                        <input type="text" id='country' value={country} onChange={onCountryChange} />
                    </div>
                    <div className='input-element'>
                        <div>금메달</div>
                        <input type="number" min='0' id='gold' value={medals.gold} onChange={onMedalsChange} />
                    </div>
                    <div className='input-element'>
                        <div>은메달</div>
                        <input type="number" min='0' id='silver' value={medals.silver} onChange={onMedalsChange} />
                    </div>
                    <div className='input-element'>
                        <div>동메달</div>
                        <input type="number" min='0' id='bronze' value={medals.bronze} onChange={onMedalsChange} />
                    </div>
                    <CRUDButton style={style} handler={addRowHandler}>국가 추가</CRUDButton>
                    <CRUDButton style={style} buttonVariant='warning' handler={updateRowHandler}>업데이트</CRUDButton>
                </form>
            </div>
            {/* 모달 컴포넌트 */}
            <ExceptionModal show={show} />
        </>
    )
}

export default InputBar