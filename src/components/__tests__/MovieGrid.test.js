import React from "react";
import { shallow } from "enzyme";

import { MovieGrid } from "../MovieGrid";

describe("MovieGrid", () => {
  it("renders header with links", () => {
    const props = { classes: {}, movieList: [] };
    const wrapper = shallow(<MovieGrid {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
