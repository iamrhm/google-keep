import React from "react";
import { withRouter } from "react-router-dom";

import {
  Container,
  SearchBoxWrapper,
  SearchInput,
  IconWrapper,
  SearchIcon,
  CloseIcon
} from "./style";

import debounce from "../../helpers/debounce";
import getSearchQuery from "../../helpers/getSearchQuery";

const Header = ({ history }) => {
  const [searchQuery, updateSearchQuery] = React.useState("");
  const [isShown, setShown] = React.useState(false);

  const handleSearchQueryChange = (query) => {
    if (query.length > 2)
      history.push({
        hash: `/search/?text=${query}`
      });
    else if (query.length <= 0)
      history.push({
        hash: `/search`
      });
  };

  const handleInputChange = (e) => {
    let query = "";
    if (e) {
      query = e.target.value;
    }
    updateSearchQuery(query);
    debounce(() => handleSearchQueryChange(query), 1000);
  };

  const handleClick = () => {
    setShown(true);
    if (searchQuery.length <= 0)
      history.push({
        hash: `/search`
      });
    else
      history.push({
        hash: `/search/?text=${searchQuery}`
      });
  };

  const handleClose = () => {
    updateSearchQuery("");
    setShown(false);
    history.push("/");
  };

  React.useEffect(() => {
    const searchQueryFromHistory = getSearchQuery(history);
    if (searchQueryFromHistory && searchQueryFromHistory !== "") {
      updateSearchQuery(searchQueryFromHistory);
      debounce(() => handleSearchQueryChange(searchQueryFromHistory), 1000);
    }
  }, []);

  return (
    <Container>
      <SearchBoxWrapper isShown={isShown}>
        <IconWrapper>
          <SearchIcon onClick={(e) => handleClick(e)} />
        </IconWrapper>
        <SearchInput
          name="search"
          value={searchQuery}
          onChange={(e) => handleInputChange(e)}
          onClick={(e) => handleClick(e)}
        />
        <IconWrapper isShown={isShown}>
          <CloseIcon
            onClick={(e) => {
              handleClose();
            }}
          />
        </IconWrapper>
      </SearchBoxWrapper>
    </Container>
  );
};

export default withRouter(Header);
