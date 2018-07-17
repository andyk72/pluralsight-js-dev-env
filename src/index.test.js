import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    // done parameter is necessary for mocha to work properly when dealing with asynchronous operations (like jsdom.env())
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Hello World!!!');
            done();
            window.close();
        });
        expect(true).to.equal(true);
    });
});
