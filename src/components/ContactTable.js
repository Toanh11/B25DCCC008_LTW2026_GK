import React from 'react';
import ContactRow from './ContactRow';

const ContactTable = ({ contacts, onDelete, onToggle }) => {
  if (contacts.length === 0) return <div>Không có dữ liệu</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>Họ tên</th>
          <th>Điện thoại</th>
          <th>Email</th>
          <th>Nhóm</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(c => (
          <ContactRow key={c.id} contact={c} onDelete={onDelete} onToggle={onToggle} />
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;