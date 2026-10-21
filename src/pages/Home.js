import React from 'react';

const Home = ({ contacts }) => {
  const total = contacts.length;
  const favorites = contacts.reduce((count, c) => c.favorite ? count + 1 : count, 0);
  const gmailUsers = contacts.filter(c => c.email.endsWith('@gmail.com')).length;

  return (
    <div>
      <h2>Danh bạ</h2>
      <h3>Trang chủ</h3>
      <p>Tổng số liên hệ: {total}</p>
      <p>Số liên hệ yêu thích: {favorites}</p>
      <p>Số liên hệ dùng Gmail: {gmailUsers}</p>
    </div>
  );
};

export default Home;