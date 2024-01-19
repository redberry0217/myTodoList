import React, { useState } from 'react'

function DoneCard({ done, DoneRemoveBtnHandler, undoneBtnHandler }) {
    return (
        <div className="cardList">
            {done.map(item => {
                return (
                    <div className="todoCard" key={item.id}>
                        <span className="showTitle">{item.title}</span>
                        <span className="showMemo">{item.memo}</span>
                        <div className="btns">
                            <button onClick={() => DoneRemoveBtnHandler(item.id)}>삭제하기</button>
                            <button onClick={() => undoneBtnHandler(item)}>취소하기</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DoneCard