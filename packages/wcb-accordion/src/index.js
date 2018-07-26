// @flow
import React, {Component} from 'react';
import {styled} from "styletron-react";

const Foo = styled("div", {color: "red"});
export default class Accordion extends Component<*> {
  render() {

    return (
      <Foo> Foo </Foo>
    );
  }
}
