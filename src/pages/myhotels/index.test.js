import renderer from "react-test-renderer";
import Myhotels from ".";

describe("Manager Hotels Tab", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Myhotels />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
