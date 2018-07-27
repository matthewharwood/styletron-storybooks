export const values = {
  animation: {
    uiSpeed: 'all 250ms ease',
  },
  color: {
    black: '#111',
    darkGrey: '#8b8b8b',
    darkLine: '#4D4D4D',
    grey: '#e6e6e6',
    accent: '#5779da',
    ctaColor: '#2B6EE8',
    white: '#ffffff',
  },
  fontSize: {
    heading1: '4.75rem',
    heading2: '3.5rem',
    heading3: '2.5rem',
    heading4: '1.5rem',
    heading5: '1.05rem',
    bodyLead: '1.15rem',
    bodyBase: '1rem',
    bodyLegal: '0.85rem',
    bodyRem: '1rem',
    navItem: '1.35rem',
    ctaLink: '1.15rem',
  },
  fontFamily: {
    body: `'ubertextbeta','Helvetica Neue',Helvetica,sans-serif`,
    heading: `'uberbeta','Helvetica Neue',Helvetica,sans-serif`,
  },
  layout: {
    blockPaddingEnds: 'calc(25px + 5vw)',
    blockPaddingSides: 'calc(25px + 10vw)',
    // blockPaddingSides: 'calc(37.5px + 7.5vw)',
    negativeBlockPaddingEnds: 'calc(-25px - 5vw)',
    negativeBlockPaddingSides: 'calc(-25px - 10vw)',
    // negativeBlockPaddingSides: 'calc(-37.5px - 7.5vw)',
    bodyMaxWidth: 'calc(660px + 5vw)',
    gutterDefault: 'calc(12.5px + 2.5vw)',
    gutterHalf: 'calc(6.25px + 1.25vw)',
    gutterQuarter: 'calc(3.125px + 0.625vw)',
    negativeGutterDefault: 'calc(-12.5px - 2.5vw)',
    negativeGutterHalf: 'calc(-6.25px - 1.25vw)',
    negativeGutterQuarter: 'calc(-3.125px - 0.625vw)',
  },
  breakpoints: {
    portable: '960px',
    palm: '767px',
  },
  ui: {
    hoverOpacityText: '0.75',
  },
};

export const defaults = {
  block: {
    backgroundColor: values.color.white,
    textColor: values.color.black,
  },
  lines: {
    color: values.color.grey,
  },
};

export default {
  defaults,
  values,
};
