import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GROUPS } from '../data';

const AddContact = ({ onAdd }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', group: 'Bạn bè' });
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, group } = formData;

    if (!name || !phone || !email || !group) {
      setErrorMsg('Vui lòng nhập đầy đủ thông tin phía dưới form');
      return;
    }
    if (phone.length !== 10 || !phone.startsWith('0')) {
      setErrorMsg('Số điện thoại phải gồm 10 chữ số và bắt đầu bằng số 0');
      return;
    }
    if (!email.includes('@')) {
      setErrorMsg('Email không hợp lệ');
      return;
    }

    onAdd({ name, phone, email, group });
    navigate('/contacts', { replace: true });
  };

  return (
    <div>
      <h2>Thêm mới</h2>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Họ tên: </label>
          <input id="name" type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </div>
        <div>
          <label htmlFor="phone">Số điện thoại: </label>
          <input id="phone" type="text" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input id="email" type="text" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        </div>
        <div>
          <label htmlFor="group">Nhóm: </label>
          <select id="group" value={formData.group} onChange={(e) => setFormData({...formData, group: e.target.value})}>
            {GROUPS.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default AddContact;