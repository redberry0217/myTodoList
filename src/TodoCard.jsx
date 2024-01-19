import React, { useState } from 'react'

function TodoCard({ todo, removeBtnHandler, DoneBtnHandler }) {
    return (
        <div className="cardList">
            {todo.map(item => {
                return (
                    <div className="todoCard" key={item.id}>
                        <span className="showTitle">{item.title}</span>
                        <span className="showMemo">{item.memo}</span>
                        <div className="btns">
                            <button onClick={() => removeBtnHandler(item.id)}>삭제하기</button>
                            <button onClick={() => DoneBtnHandler(item)}>완료하기</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoCard