import { Button, Container, MenuItem, TextField } from '@mui/material';
import { Box } from '@mui/system';

const SearchForm = ({
  handleSearchBooks,
  searchType,
  setSearchType,
  query,
  setQuery,
  setCurrentPage,
}) => {
  const options = [
    { value: 'title', label: 'Title' },
    { value: 'author', label: 'Author' },
    { value: 'subject', label: 'Subject' },
  ];

  const handleSubmit = async e => {
    if (!searchType || !query) return;
    e.preventDefault();
    setCurrentPage(1);
    await handleSearchBooks({ type: searchType, query: query }, 1);
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
            sx={{ minWidth: '30%', bgcolor: 'white' }}
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
