import React from "react";

import TextArea from "../text-area";

import { Container } from "./style";
import { withRouter } from "react-router-dom";

import debounce from "../../helpers/debounce";
import getSearchQuery from "../../helpers/getSearchQuery";

const Header = ({ history }) => {
  const searchQueryFromHistory = getSearchQuery(history);
  const [searchQuery, updateSearchQuery] = React.useState(
    searchQueryFromHistory
  );

  const handleSearchQueryChange = () => {
    history.push({
      hash: `/search/?text=${searchQuery}`
    });
  };

  const handleChange = (e) => {
    let query = "";
    if (e) {
      query = e.target.value;
    }
    updateSearchQuery(query);
  };

  React.useEffect(() => {
    if (searchQuery !== "") debounce(handleSearchQueryChange, 1000);
    else {
      if (searchQueryFromHistory !== "")
        debounce(handleSearchQueryChange, 1000);
    }
  });

  return (
    <Container>
      <TextArea
        propsRow={2}
        propsName="title"
        propsPlaceholder="Title"
        propsValue={searchQuery || ""}
        handleInputChange={(e) => handleChange(e)}
        onClick={(e) => handleChange(e)}
      />
    </Container>
  );
};

export default withRouter(Header);
