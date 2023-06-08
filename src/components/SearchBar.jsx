import { Search } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }

  return (
    <Paper
      component={'form'}
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}
    >
      <input className='search-bar' placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <IconButton type='button' sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;