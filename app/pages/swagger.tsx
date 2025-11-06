// app/pages/swagger.tsx
import React, { useEffect, useRef } from 'react';

interface SwaggerWindow {
  SwaggerUIBundle: {
    presets: {
      apis: unknown[];
    };
    (options: Record<string, unknown>): unknown;
  };
  SwaggerUIStandalonePreset: unknown;
}

const SwaggerPage: React.FC = () => {
  const swaggerUiRef = useRef<unknown | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
const ui = (window as unknown as SwaggerWindow).SwaggerUIBundle({
        url: '/api-docs/swagger.json',
        dom_id: '#swagger-ui',
        presets: [
(window as unknown as SwaggerWindow).SwaggerUIBundle.presets.apis,
(window as unknown as SwaggerWindow).SwaggerUIStandalonePreset
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
