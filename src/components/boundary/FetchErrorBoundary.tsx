import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BarLoader } from 'react-spinners';

import { FetchErrorFallback } from './FetchErrorFallback';

interface FetchErrorBoundaryProps {
  children: React.ReactNode;
}
export const FetchErrorBoundary = ({ children }: FetchErrorBoundaryProps) => {
  return (
    <ErrorBoundary FallbackComponent={FetchErrorFallback}>
      <Suspense
        fallback={
          <div className="flex size-full min-h-[600px] min-w-[600px] items-center justify-center">
            <BarLoader color="#4565cc" />
          </div>
        }
      >
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};
