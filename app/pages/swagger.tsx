// app/pages/swagger.tsx
import React from 'react';
import { useEffect } from 'react';

const SwaggerPage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-expect-error SwaggerUI types not available
      const ui = window.SwaggerUIBundle({
        url: '/api-docs/swagger.json',
        dom_id: '#swagger-ui',
        presets: [
          // @ts-expect-error SwaggerUI types not available
          window.SwaggerUIBundle.presets.apis,
          // @ts-expect-error SwaggerUI types not available
          window.SwaggerUIStandalonePreset
        ],
        layout: "BaseLayout"
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="swagger-ui" />
  );
};

export default SwaggerPage;