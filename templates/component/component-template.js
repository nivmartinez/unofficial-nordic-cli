import Handlebars from 'handlebars'

const source = `import React, { FunctionComponent } from 'react';

const {{name}}: FunctionComponent = () => {
  return <></>;
};

export default {{name}};
`
const template = Handlebars.compile(source)

export default template
