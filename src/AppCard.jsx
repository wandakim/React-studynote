import React from 'react';

export default function AppCard() {
  return (
    <>
      <Card>
        <p>Card1</p>
      </Card>

      <Card>
        <h1>Card2</h1>
        <p>설명</p>
      </Card>

      <Card>
        <article></article>
      </Card>
    </>
  ); // 컨테이너용 컴포넌트 안에 들어가는 내용들은 원하는 대로 할 수 있다.
}
/* 자식 요소들을 감싸는 한단계 높은 컴포넌트를 만들면 컴포넌트를 조금 더 효율성 있게 재사용 할 수 있다.  */
function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'black',
        borderRadius: '20px',
        color: 'white',
        minHeight: '200px',
        maxWidth: '200px',
        margin: '1rem',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}
