import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = contacts.find(c => c.id === Number(id));

  const [isCalling, setIsCalling] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [lastCall, setLastCall] = useState(null);

  useEffect(() => {
    let interval;
    if (isCalling) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCalling]);

  if (!contact) return <div>Không tìm thấy liên hệ</div>;

  const handleCall = () => {
    setSeconds(0);
    setIsCalling(true);
    setLastCall(null);
  };

  const handleEndCall = () => {
    setIsCalling(false);
    setLastCall(seconds);
  };

  return (
    <div>
      <h2>Chi tiết</h2>
      <p>Họ tên: {contact.name}</p>
      <p>Số điện thoại: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <p>Nhóm: {contact.group}</p>
      <p>Yêu thích: {contact.favorite ? 'Có' : 'Không'}</p>
      
      <div style={{ marginTop: '20px' }}>
        {!isCalling ? (
          <button onClick={handleCall}>Gọi</button>
        ) : (
          <div>
            <p>Đang gọi... {seconds} giây</p>
            <button onClick={handleEndCall}>Kết thúc</button>
          </div>
        )}
        {lastCall !== null && !isCalling && <p>Cuộc gọi kết thúc sau {lastCall} giây</p>}
      </div>

      <br />
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};

export default ContactDetail;