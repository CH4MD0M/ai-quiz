import { createRoot } from 'react-dom/client';
import App from 'App';

import QueryProvider from 'components/common/QueryProvider';

// Tailwind
import 'styles/tailwind.css';

// Mocks
import { worker } from 'mocks/browser';

const main = async () => {
  if (import.meta.env.DEV) {
    await worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url: 'mockServiceWorker.js',
      },
    });
  }

  const root = createRoot(document.getElementById('root')!);
  root.render(
    <QueryProvider>
      <App />
    </QueryProvider>,
  );
};

main();
