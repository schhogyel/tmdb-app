import React from "react";
import { shallow } from "enzyme";

import { MovieDetailsCard } from "../MovieDetailsCard";

describe("MovieDetailsCard", () => {
  it("renders header with links", () => {
    const props = { classes: {} };
    const wrapper = shallow(<MovieDetailsCard {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
