import { LSSerializer } from 'ember-localstorage-adapter';

export default LSSerializer.extend();

// app/adapters/application.js
import LSAdapter from 'ember-localstorage-adapter';

export default LSAdapter.extend({
  // namespace: 'yournamespace'
});
