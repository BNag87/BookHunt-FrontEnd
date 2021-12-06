import { Button, Container, MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

const SearchForm = ({ handleSearchBooks }) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('');

  const options = [
    { value: 'title', label: 'Title' },
    { value: 'author', label: 'Author' },
    { value: 'subject', label: 'Subject' },
  ];

  const handleSubmit = e => {
    if (!searchType || !query) return;
    e.preventDefault();
    handleSearchBooks({ type: searchType, query: query });
    setQuery('');
    setSearchType('');
  };
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <form className="form" onSubmit={handleSubmit}>
        <Box sx={{ width: '100%', margin: 'auto', mb: 2, display: 'flex' }}>
          <TextField
            id="search"
            select
            label="Search by"
            required={true}
            value={searchType}
            onChange={e => setSearchType(e.target.value)}
            sx={{ width: '35%', bgcolor: 'white' }}
          >
            {options.map((option, i) => (
              <MenuItem key={i} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            variant="outlined"
            label="Search Term"
            id="query"
            type="text"
            required={true}
            value={query}
            onChange={e => setQuery(e.target.value)}
            sx={{ width: '70%', bgcolor: 'white' }}
          />
        </Box>

        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          sx={{ p: 2 }}
        >
          Search
        </Button>
      </form>
    </Container>
  );
};

export default SearchForm;
