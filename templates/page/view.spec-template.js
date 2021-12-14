import Handlebars from 'handlebars'

const source = `import { render } from '@testing-library/react';
import React from 'react';
import View from './view';

describe('{{name}} View', () => {
  test('should render view', () => {
    const viewComponent = render(<View />);
    expect(viewComponent).toBeDefined();
  });
});
`
const template = Handlebars.compile(source)

export default template
