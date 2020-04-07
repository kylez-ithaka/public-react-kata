import React from "react";
import Link from "./Link.react.js";
import renderer from "react-test-renderer";

test("Link changes the class when hovered", () => {
  const component = renderer.create(
    <Link page="http://www.jstor.org">JSTOR</Link>
  );
  let tree = component.toJSON();
  expect(tree.props.className).toBe("normal");

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree.props.className).toBe("hovered");

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree.props.className).toBe("normal");
});
