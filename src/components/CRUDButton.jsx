import React from 'react'
import { Button } from 'react-bootstrap'

// 버튼 컴포넌트
function CRUDButton({ style, children, rowId, handler, buttonVariant}) {
    return (
        <Button style={style} variant={buttonVariant} onClick={() => handler(rowId)}>{children}</Button>
    )
}

export default CRUDButton