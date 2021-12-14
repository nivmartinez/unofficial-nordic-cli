import Handlebars from 'handlebars'

const source = `/**
 * Styles
 */
import '../pages/{{name}}/{{name}}.scss';

/**
 * Module dependencies
 */
import React from 'react';
import { hydrate } from 'nordic/hydrate';
import { I18n } from 'nordic/i18n';
import { I18nProvider, Translations } from 'frontend-i18n';
import View from '../pages/{{name}}/view';

const { translations } = window.__PRELOADED_STATE__;
const i18n = new I18n({ translations: translations as Translations });
/**
 * Mount Product Reviewer on client
 */
hydrate(
  <I18nProvider i18n={i18n}>
    <View translations={translations} />
  </I18nProvider>,
  document.getElementById('root-app'),
);
`
const template = Handlebars.compile(source)

export default template
