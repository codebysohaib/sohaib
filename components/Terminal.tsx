'use client';

import { useEffect, useRef, useState } from 'react';
import { terminalLines, TerminalLine } from '@/lib/data';

export default function Terminal() {
  const [renderedLines, setRenderedLines] = useState<TerminalLine[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const lineIdxRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      function typeNextLine() {
        if (lineIdxRef.current >= terminalLines.length) {
          setIsFinished(true);
          return;
        }
        const currentLine = terminalLines[lineIdxRef.current];
        lineIdxRef.current += 1;
        setRenderedLines((prev) => [...prev, currentLine]);

        const nextDelay = currentLine.type === 'output' ? 80 : 120;
        setTimeout(typeNextLine, nextDelay);
      }
      typeNextLine();
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <div className="dot dot-red"></div>
        <div className="dot dot-yellow"></div>
        <div className="dot dot-green"></div>
        <span className="terminal-title">developer.js</span>
      </div>
      <div className="terminal-body" id="terminal-body">
        {renderedLines.map((l, i) => {
          if (l.type === 'prompt') {
            return (
              <div key={i}>
                <span className="t-prompt">$ </span>
                <span className="t-cmd">{l.text?.slice(2)}</span>
              </div>
            );
          }
          if (l.type === 'output') {
            return <div key={i}>&nbsp;</div>;
          }
          if (l.type === 'comment') {
            return (
              <div key={i}>
                <span className="t-comment">{l.text}</span>
              </div>
            );
          }
          if (l.type === 'code') {
            return (
              <div
                key={i}
                dangerouslySetInnerHTML={{ __html: `&nbsp;&nbsp;${l.html}` }}
              />
            );
          }
          return null;
        })}
        {isFinished && (
          <div>
            <span className="t-prompt">$</span> <span className="t-cursor"></span>
          </div>
        )}
      </div>
    </div>
  );
}
