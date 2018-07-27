// @flow
import React, {Component, Fragment} from 'react';
import {styled} from 'styletron-react';
import dotcomStyles from '@matthewharwood/dotcom-styles';
const {headingByLevelSize} = dotcomStyles;

type Props = {
  className: string,
  heading: string,
  styleLevel: number,
  elementLevel: number,
}


type State = {
  valid: boolean
}

const Host = styled('h1', ({$styleLevel}) => {
  return {
    fontSize: headingByLevelSize[$styleLevel],
    lineHeight: '1.05em'
  }
});

const hasProps = (...props) => props.every(Boolean);


export class Heading extends Component<Props, State> {
  static defaultProps = {
    styleLevel: 3,
    elementLevel: 3,
    className: '',
    heading: 'heading'
  };


 
  render() {
    const {heading, styleLevel, elementLevel} = this.props;
    return this.state.valid &&
      <Host $as={`h${elementLevel}`} $styleLevel={styleLevel}>{heading}</Host>
  }
}

// <Heading elementLevel="h2" styleLevel="h3
