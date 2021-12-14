import Handlebars from 'handlebars'

const source = `import React from 'react';
import { Request } from 'express';
import { I18nProvider } from 'frontend-i18n';
import View from './view';

/**
 * Renderiza la primera View.
 */
export const render = (req: Request, res: any) => {
  const { i18n } = req;
  if (!i18n) throw new TypeError('Missing i18n provider');

  const {{name}}PageView = (props: any) => (
    <I18nProvider i18n={req.i18n!}>
      <View {...props} />
    </I18nProvider>
  );

  res.render(
    {{name}}PageView,
    {
      translations: req.translations,
    },
    {
      layoutOptions: {
        staticMarkup: false,
      },
      navigationOptions: {
        type: 'lite',
      },
    },
  );
};

export default render;
`

const template = Handlebars.compile(source)

export default template
