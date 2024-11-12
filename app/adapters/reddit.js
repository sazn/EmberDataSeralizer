import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class RedditAdapter extends JSONAPIAdapter {
  host = 'https://www.reddit.com';
  urlForQuery(query, modelName) {   
    return `${this.host}/r/${query}.json`;
  }
}
