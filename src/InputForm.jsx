import React from 'react';

const InputForm = ({ title, memo, titleChangeHandler, memoChangeHandler, writeBtnHandler}) => {
    return (
        <div className="writeBox">
        <h3>제 목</h3>
        <input
          className="writeInput"
          type="text"
          value={title}
          onChange={titleChangeHandler}
          maxLength="10"
        />
        <h3>내 용</h3>
        <input
          className="writeInput"
          type="text"
          value={memo}
          onChange={memoChangeHandler}
          maxLength="19"
        />
        <button onClick={writeBtnHandler}
                className="button-with-click-effect">추가하기</button>
      </div>
    )
}

export default InputForm