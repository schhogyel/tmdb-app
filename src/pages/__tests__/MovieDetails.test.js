import React from "react";
import { shallow } from "enzyme";

import { MovieDetails } from "../MovieDetails";

describe("MovieDetails", () => {
  it("renders", () => {
    const props = { classes: {} };
    const wrapper = shallow(<MovieDetails {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
