import React from "react";
import { shallow } from "enzyme";
import AppBar from "@material-ui/core/AppBar";

import { Header } from "../Header";

describe("Header", () => {
  it("renders header with links", () => {
    const props = { classes: {} };
    const wrapper = shallow(<Header {...props} />);
    const appBarWrapper = wrapper.find(AppBar);

    expect(appBarWrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
