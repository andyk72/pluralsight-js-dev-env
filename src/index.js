import './index.css';
import numeral from 'numeral';

/* eslint-disable no-debugger */
/* eslint-disable no-console */

const courseValue = numeral(1000).format('$0,0.00');

debugger; // the javascript debugger will be fired at this line execuion

console.log(`I would pay ${courseValue} for this awesome course!`);

(function() {
    var node = document.createElement('style');
    document.body.appendChild(node);
    window.addStyleString = function(str) {
        node.innerHTML = str;
    }
}());

/*
addStyleString('body { color: red }');
addStyleString('body { background: silver }');
*/
