// @flow
import React, {Component} from 'react';
import {styled} from "styletron-react";

const Foo = styled("div", {color: "white"});
export class Accordion extends Component<*> {
  render() {

    return (
      <Foo>Foo</Foo>
    );
  }
}
