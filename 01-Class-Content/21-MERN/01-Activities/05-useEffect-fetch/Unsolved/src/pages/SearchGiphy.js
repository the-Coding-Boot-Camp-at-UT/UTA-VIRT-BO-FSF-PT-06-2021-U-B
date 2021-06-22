import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardImg,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  CardHeader,
  Button
} from 'reactstrap';
import { fetchGiphy } from '../utils/API';

const SearchGiphy = () => {
  const [searchedGiphy, setSearchedGiphy] = useState('');
  const [searchInput, setSearchInput] = useState('');

  // Use `useEffect` to run `handleSearchGiphy()` with a search term of your choice
  // YOUR CODE HERE
  //

  const handleSearchGiphy = async query => {
    try {
      const response = await fetchGiphy(query);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const gif = await response.json();

      setSearchedGiphy(gif.data[0].images.fixed_height.url);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    handleSearchGiphy(searchInput);
  };

  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card body inverse color="info">
            <CardBody>
              <CardHeader tag="h1">Search for a GIF</CardHeader>
              <Form onSubmit={handleFormSubmit}>
                <FormGroup>
                  <Label for="Search" size="lg">
                    Search:
                  </Label>
                  <Input
                    type="text"
                    name="searchInput"
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                  />
                </FormGroup>
                <Button color="danger" type="submit">
                  SUBMIT
                </Button>
              </Form>
              <br />
              <div>
                {searchedGiphy ? (
                  <CardImg bottom src={searchedGiphy} alt="gif" />
                ) : (
                  'No GIF yet!'
                )}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SearchGiphy;
