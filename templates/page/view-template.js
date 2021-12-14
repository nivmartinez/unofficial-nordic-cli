import Handlebars from 'handlebars'

const source = `/**
 * Module dependencies
 */
import React from 'react';
import Page from 'nordic/page';
import injectI18n from 'nordic/i18n/injectI18n';

function View(props: any) {
  return (
    <Page name="{{name}}" state={...props}>
      <>{{name}} page works</>
    </Page>
  );
}

/**
 * Inject i18n context as props into View.
 */
export default injectI18n(View);
`
const template = Handlebars.compile(source)

export default template
