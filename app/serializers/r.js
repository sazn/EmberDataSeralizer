import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class RSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    debugger;
    return super.normalizeResponse(...arguments);
  }
}
