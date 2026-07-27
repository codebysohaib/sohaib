'use client';

import { useState } from 'react';

const menuOptions = [
  'Network Tools',
  'Developer Tools',
  'Generators',
  'File Tools',
  'System Tools',
  'Web Tools',
  'Settings',
  'Exit',
];

export default function InteractiveTerminal() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="terminal cli-demo-terminal">
      <div className="terminal-bar">
        <div className="dot dot-red"></div>
        <div className="dot dot-yellow"></div>
        <div className="dot dot-green"></div>
        <span className="terminal-title">CBS DevTools CLI</span>
      </div>
      <div className="terminal-body cli-demo-body">
        <div className="cli-header">CBS DevTools</div>
        <div className="cli-menu">
          {menuOptions.map((opt, i) => {
            const isSelected = i === selectedIndex;
            return (
              <div
                key={opt}
                className={`cli-item ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedIndex(i)}
              >
                <span className="cli-pointer">{isSelected ? '❯' : ' '}</span>{' '}
                <span className={isSelected ? 't-cmd' : 't-comment'}>
                  {opt}
                </span>
              </div>
            );
          })}
        </div>
        <div className="cli-hint">
          <span className="t-comment">Use arrow keys or click to navigate</span>
        </div>
      </div>
    </div>
  );
}
