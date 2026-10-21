import React from 'react';
import { GROUPS } from '../data';

const FilterBar = ({ searchTerm, onSearchChange, filterGroup, onFilterChange }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="search">Tìm kiếm: </label>
      <input 
        id="search" 
        type="text" 
        value={searchTerm} 
        onChange={(e) => onSearchChange(e.target.value)} 
      />
      
      <label htmlFor="group" style={{ marginLeft: '15px' }}>Nhóm: </label>
      <select id="group" value={filterGroup} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="Tất cả">Tất cả</option>
        {GROUPS.map(g => <option key={g} value={g}>{g}</option>)}
      </select>
    </div>
  );
};

export default FilterBar;