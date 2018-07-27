// @flow
import React, {Component, Fragment} from 'react';
import {styled} from 'styletron-react';
import dotcomStyles from '@matthewharwood/dotcom-styles';

const {values} = dotcomStyles;

const AnchorOrButton = styled('a', ({$style, $size}) => {
  return {
    backgroundColor: $style === 'button' ? values.color.ctaColor : 'none',
    borderRadius: '4px',
    display: 'inline-block',
    color: $style === 'button' ? values.color.white : values.color.ctaColor,
    fontSize: $size === 'lead' ? values.fontSize.bodyLead : values.fontSize.bodyBase,
    textDecoration: $style === 'button' ? 'none' : 'underline',
    transition: 'all 150ms ease',
    fontWeight: 600,
    padding: $style === 'button' ? '0.65em 1.25em' : 0,
    ':hover': {
      opacity: 0.65
    },
    ':focus': {
      opacity: 0.65
    },
    ':active': {
      opacity: 0.65
    }
  }
});

type Props = {
  ariaLabel: string,
  ctaLink: string,
  ctaText: string,
  size: string,
  style: string,
};

export class CtaLink extends Component<Props> {
  static defaultProps = {
    ariaLabel: '',
    ctaText: '1234 Test',
    ctaLink: 'http://www.google.com',
    style: 'button',
    size: 'lead'
  };

  render() {
    const {ariaLabel, ctaLink, ctaText, size, style} = this.props;

    const hasCta = Boolean(ctaText && ctaLink);

    return hasCta &&
      <AnchorOrButton
        aria-label={ariaLabel}
        href={ctaLink}
        $style={style}
        $size={size}>
        {ctaText}
      </AnchorOrButton>
  }
}
