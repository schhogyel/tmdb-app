import React from "react";
import { shallow } from "enzyme";

import { MovieBrowser } from "../MovieBrowser";

describe("MovieBrowser", () => {
  it("renders", () => {
    const props = { classes: {} };
    const wrapper = shallow(<MovieBrowser {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
