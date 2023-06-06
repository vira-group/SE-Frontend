import renderer from "react-test-renderer";
import Credit from ".";

describe("Wallet Page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Credit />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
