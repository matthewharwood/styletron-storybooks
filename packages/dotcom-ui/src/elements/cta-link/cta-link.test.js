import {CtaLink} from './cta-link';

test('render a CtaLink', () => {
  const wrapper = shallow(
    <CtaLink
      aria-label={'hello'}
      href={'http://www.google.com'}
      $style={'button'}
      $size={'lead'}>
        Hello Jest!
    </CtaLink>
  );
  expect(wrapper).toMatchSnapshot();
});