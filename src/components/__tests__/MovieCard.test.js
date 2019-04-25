import React from "react";
import { shallow } from "enzyme";

import { MovieCard } from "../MovieCard";

describe("MovieCard", () => {
  it("renders header with links", () => {
    const props = { classes: {} };
    const wrapper = shallow(<MovieCard {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
