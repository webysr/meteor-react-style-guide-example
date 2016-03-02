import ReactStyleGuide from 'meteor/webysr:react-style-guide';
import MyReactComponent from './MyReactComponent.jsx';
import FavouriteNumber from './FavouriteNumber.jsx';

const styleGuide = new ReactStyleGuide();
styleGuide.addComponent(MyReactComponent, {name: 'Jürgen'});
styleGuide.addComponent(FavouriteNumber, {name: 'Leonhard Euler', favouriteNumber: '2,71828 18284 59045 23536 02874 71352 66249 77572 47093 69995 ...'});