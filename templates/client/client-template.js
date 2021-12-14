import Handlebars from 'handlebars'

const source = `/**
 * Styles
 */
import '../pages/product-search/product-search.scss';

/**
 * Module dependencies
 */
import React from 'react';
import { hydrate } from 'nordic/hydrate';
import { I18n } from 'nordic/i18n';
import { I18nProvider, Translations } from 'frontend-i18n';
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
// eslint-disable-next-line @typescript-eslint/no-var-requires
import View from '../pages/product-search/view';
import { TConfig } from '../hooks/use-config/types.d';

require('../pages/product-search/product-search.scss');

const { translations, config } = window.__PRELOADED_STATE__;
const i18n = new I18n({ translations: translations as Translations });
/**
 * Mount Product Reviewer on client
 */
hydrate(
  <I18nProvider i18n={i18n}>
    <View config={config as TConfig} translations={translations} />
  </I18nProvider>,
  document.getElementById('root-app'),
);
`
const template = Handlebars.compile(source)

export default template
