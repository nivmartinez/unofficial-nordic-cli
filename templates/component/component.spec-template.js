import Handlebars from 'handlebars'

const source = `import React from 'react';
import { render } from '@testing-library/react';
import {{name}} from './{{name}}';

describe('tests for {{name}} component', () => {
  test('{{name}} sould render', () => {
    const component = render(<{{name}} />);
    expect(component).toBeDefined();
  });
});
`
const template = Handlebars.compile(source)

export default template
