import * as React from 'react';
import {
  Segment,
  List,
} from 'semantic-ui-react';

class Footer extends React.Component {
  render() {
    return (
      <Segment basic={true}>
        <List horizontal={true} floated="right" celled={true}>
          <List.Item><a href="https://twitter.com/intent/tweet" className="twitter-share-button">Tweet</a></List.Item>
          <List.Item><a href="https://twitter.com/kkeisuke" className="twitter-follow-button" data-show-count="false">Follow @kkeisuke</a></List.Item>
          <List.Item>
            <a href="http://b.hatena.ne.jp/entry/" className="hatena-bookmark-button" data-hatena-bookmark-layout="basic-counter" title="このエントリーをはてなブックマークに追加">
              <img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" />
            </a>
          </List.Item>
          <List.Item><a className="github-button" href="https://github.com/kkeisuke/utility" data-icon="octicon-star" data-count-href="/kkeisuke/utility/stargazers" data-count-api="/repos/kkeisuke/utility#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star kkeisuke/utility on GitHub">Star</a></List.Item>
        </List>
      </Segment>
    );
  }
}

export default Footer;
