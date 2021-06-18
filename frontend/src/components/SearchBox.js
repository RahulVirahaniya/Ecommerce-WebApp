import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} className="searchContainer ">
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-3 ml-sm-6 searchBox"
        style={{ width: '250px' }}
      ></Form.Control>
      <Button
        type="submit"
        variant="outline-success"
        className="p-1 mx-2 searchButton"
        style={{ width: '120px' }}
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
