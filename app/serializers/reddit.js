import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class RedditSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) { 
    return {
      data: payload.data.children.map((info) => {
        return {
          id: info.data.id,
          type: 'reddit',
          attributes: info.data
        };
      })
    };
  }
}
