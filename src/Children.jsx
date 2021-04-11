import React, { useEffect } from "react";
import { Wrapper, Box } from "./children.style";
import { ChildOne } from "./children/ChildOne";
import { ChildTwo } from "./children/ChildTwo";
import { ChildThree } from "./children/ChildThree";
import { ChildFour } from "./children/ChildFour";
import { ChildFive } from "./children/childFive";

// When we didn't wrap our component with React.memo(), React end-up re-rendering each all
// the component in the DOM tree which it does not make any sense because we didn't even pass any props to them to affect them. Now, we wrapped it with React memo()
//  so we don't get any unnecessary  rendering

export const Children = React.memo(
  (props) => {
    // we passed props to Children from the parent Component which in its role will cause a re-rendering.
    // Again, React.memo() does a shallow comparison, but don't worry because React.memo() has another
    // argument we can use to create a custom comparison.
    // React.memo(Component , checkEquality(nextProps, nextProps))
    return (
      <Wrapper>
        <Box>
          <ChildOne />
        </Box>
        <Box>
          <ChildTwo />
        </Box>
        <Box>
          <ChildThree />
        </Box>
        <Box>
          <ChildFour />
        </Box>
        <Box>
          <ChildFive />
        </Box>
      </Wrapper>
    );
  },
  (prevProps, nextProps) => {
    // this function should return true if the previous props are equal to the next props
    // if they are not then re-rendering
    console.log("prevProps", prevProps);
    console.log("nextProps", nextProps);
    return prevProps.render === nextProps.render;
  }
);
