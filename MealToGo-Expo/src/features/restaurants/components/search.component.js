import React, { useContext, useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import Styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';

const SearchContainer = Styled.View`
  padding:${props => props.theme.space[2]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={text => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
