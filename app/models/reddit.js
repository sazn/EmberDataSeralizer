import Model, { attr } from '@ember-data/model';

export default class RedditModel extends Model {
  @attr('string') title;
  @attr('string') num_comments;
}
