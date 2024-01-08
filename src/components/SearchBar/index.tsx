import React from 'react';
import {Searchbar as SearchBarPaper} from 'react-native-paper';
import {styles} from './styles';

interface Props {
  onChange: (value: string) => void;
  value: string;
}

const SearchBar = ({onChange, value}: Props) => (
  <SearchBarPaper
    style={styles.searchBar}
    inputStyle={styles.searchInput}
    placeholder="Search"
    onChangeText={onChange}
    value={value}
  />
);

export default SearchBar;
