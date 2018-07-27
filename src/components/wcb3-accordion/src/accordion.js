
import React, {Component} from 'react';
import {styled} from "styletron-react";
import dotcomStyles from "@matthewharwood/dotcom-styles"

const RedAnchor = styled("button", {backgroundColor: 'red', color: "darkRed"});

export class Accordion extends Component<*> {
  render() {
    console.log(dotcomStyles, 'yoooooo');
    return (
      <div>
        WTF2
      </div>
    );
  }
}
