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

import getSearchQuery from "../../helpers/getSearchQuery";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useDebounce } from "../../hooks/useDebounce";

const Header = ({ history }) => {
  const [searchQuery, updateSearchQuery] = React.useState("");
  const [isShown, setShown] = React.useState(false);
  const debounceHandler = useDebounce(searchQuery, 1000);

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
      handleSearchQueryChange(debounceHandler);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (debounceHandler) handleSearchQueryChange(debounceHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceHandler]);

  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, () => setShown(false));

  return (
    <Container ref={wrapperRef}>
      <SearchBoxWrapper ref={wrapperRef} isShown={isShown}>
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
