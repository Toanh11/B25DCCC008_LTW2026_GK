import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import ContactTable from '../components/ContactTable';

const ContactList = ({ contacts, onDelete, onToggle }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGroup, setFilterGroup] = useState('Tất cả');

  const filteredContacts = contacts.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.phone.includes(searchTerm);
    const matchGroup = filterGroup === 'Tất cả' || c.group === filterGroup;
    return matchSearch && matchGroup;
  });

  return (
    <div>
      <h2>Danh sách</h2>
      <FilterBar 
        searchTerm={searchTerm} onSearchChange={setSearchTerm} 
        filterGroup={filterGroup} onFilterChange={setFilterGroup} 
      />
      <p>Tìm thấy {filteredContacts.length} liên hệ</p>
      <ContactTable contacts={filteredContacts} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
};

export default ContactList;