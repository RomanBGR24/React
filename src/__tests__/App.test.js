import React from 'react';
import ReactDOM from 'react-dom';
import {render, unmountComponentAtNode} from 'react-dom';
import App from '../App';
import {act} from 'react-dom/test-utils';


let container = null;

beforeEach(() => {
// DOM element as a render target  
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('smoke test App component',() => {
  const div = document.createElement('div');
  ReactDOM.render(<App greetings='Hello from test'/>, div);
});


/*test(' ',() => {
  expect(shallow(<App greetings='Hello from test'/>)


  ).to

});
*/

test('render with name ',() => {
  render(<App greetings='Hello from test'/>, container);
  
  expect(container.textContent).toMatch("Hello from test, my friend");
});

test('render with text from children',() => {
  act(() => {
         render(<App greetings=''/>, container);
  });

  expect(container.querySelector('strong').textContent)
        .toBe("Currently I'm learning React ... ");
});
