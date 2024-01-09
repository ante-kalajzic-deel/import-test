import React from "react";
import { Accordion, CssBaseline } from "@letsdeel/ui";

const MyComponent = React.lazy(() => import("./MyComponent"));

const items = [
  { id: 1, title: "First", content: "First content" },
  { id: 2, title: "Second", content: "Second content" },
  { id: 3, title: "Third", content: "Third content" },
];

const Stuff = () => {
  return (
    <>
      <CssBaseline />
      <Accordion items={items} defaultIdOpened={1} />
      <MyComponent />
    </>
  );
};

export default Stuff;
