'use client';

import React, { useEffect } from 'react';

export default function X3DScene({
  width = "600px",
  height = "400px",
  color = "1 0 0"
}) {

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.x3dom) {
      const x3domScript = document.createElement('script');
      x3domScript.src = 'https://www.x3dom.org/download/x3dom.js';
      x3domScript.async = true;
      x3domScript.onerror = () => {
  	console.error('Failed to load X3DOM script');
      };

      const x3domCSS = document.createElement('link');
      x3domCSS.rel = 'stylesheet';
      x3domCSS.href = 'https://www.x3dom.org/download/x3dom.css';

      document.head.appendChild(x3domScript);
      document.head.appendChild(x3domCSS);

      return () => {
        document.head.removeChild(x3domScript);
        document.head.removeChild(x3domCSS);
      };
    }
  }, []);

  return (
    <div>
      <x3d width={width} height={height}>
        <scene>
          <viewpoint position="0 0 10" orientation="0 1 0 0"></viewpoint>
          <transform translation="0 0 0">
            <shape>
              <appearance>
                <material diffusecolor={color}></material>
              </appearance>
              <box size="2 2 2"></box>
            </shape>
          </transform>
        </scene>
      </x3d>
    </div>
  );
}
