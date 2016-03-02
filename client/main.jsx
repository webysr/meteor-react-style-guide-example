import React from 'react';
import {mount} from 'react-mounter';
import ReactStyleGuide from 'meteor/webysr:react-style-guide';
import reactTapEventPlugin from 'react-tap-event-plugin';
import HelloName from './HelloName.jsx';
import FavouriteNumber from './FavouriteNumber.jsx';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
reactTapEventPlugin();

const styleGuide = new ReactStyleGuide();
styleGuide.addComponent(HelloName, {name: 'Jürgen'});
styleGuide.addComponent(FavouriteNumber, {
  name: 'Leonhard Euler',
  favouriteNumber: '2,71828 18284 59045 23536 02874 71352 66249 77572 47093 69995 ...'
});

// define the root route to have a link to the style guide
const Home = () => (<a href="/react-style-guide">The React Style Guide</a>);
FlowRouter.route('/', {
  name: 'root',
  action() {

    mount(Home);
  }
});