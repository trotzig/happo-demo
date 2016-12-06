import ReactDOM from 'react-dom';

export default function render(component) {
  const root = document.createElement('span');
  document.body.appendChild(root);
  ReactDOM.render(component, root);
}
