import React from 'react';
import { createRoot } from 'react-dom/client';

function DemoButton({ href }) {
  return (
    <a className="btn btn-primary" href={href}>
      Book a strategy call
    </a>
  );
}

function mountButtons() {
  const nodes = document.querySelectorAll('[data-react-demo-button]');
  nodes.forEach((node) => {
    const href = node.getAttribute('data-href') || '/contact';
    const root = createRoot(node);
    root.render(<DemoButton href={href} />);
  });
}

function mountMobileMenu() {
  const trigger = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav-links]');
  if (!trigger || !nav) return;

  trigger.addEventListener('click', () => {
    const open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', open ? 'false' : 'true');
  });
}

mountButtons();
mountMobileMenu();
window.__ORBITR_REACT_CANARY__ = true;
