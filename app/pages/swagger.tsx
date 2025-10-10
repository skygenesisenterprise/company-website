// app/pages/swagger.tsx
import React, { useEffect, useRef } from 'react';
import SwaggerUI from 'swagger-ui-dist';

interface Window {
  SwaggerUIBundle: {
    presets: {
      apis: any;
    };
    (options: any): any;
  };
  SwaggerUIStandalonePreset: any;
}

const SwaggerPage: React.FC = () => {
  const swaggerUiRef = useRef<SwaggerUI | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
const ui = (window as any).SwaggerUIBundle({
        url: '/api-docs/swagger.json',
        dom_id: '#swagger-ui',
        presets: [
window.SwaggerUIBundle.presets.apis,
window.SwaggerUIStandalonePreset
        ],
        layout: "BaseLayout"
      });

      swaggerUiRef.current = ui;
    };

    return () => {
      if (swaggerUiRef.current) {
        const swaggerElement = document.querySelector('#swagger-ui');
        if (swaggerElement && swaggerElement.parentNode) {
          swaggerElement.parentNode.removeChild(swaggerElement);
        }
      }
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="swagger-ui" />
  );
};

export default SwaggerPage;
