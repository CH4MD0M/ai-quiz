import { isAxiosError } from 'axios';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { FallbackProps } from 'react-error-boundary';

/* TODO: 에러코드, 메시지 수정
- constants에 분리
*/

interface CustomError extends Error {
  code?: string;
}

export const FetchErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { reset } = useQueryErrorResetBoundary();

  const handleClickReset = () => {
    resetErrorBoundary();
    reset();
  };

  const getErrorMessage = (error: unknown): string => {
    if (isAxiosError(error)) {
      // Axios error
      return error.response?.data?.message || error.message || 'API 요청 중 오류가 발생했습니다.';
    } else if (error instanceof Error) {
      // Standard Error object
      return (error as CustomError).code
        ? `${(error as CustomError).code}: ${error.message}`
        : error.message;
    }
    // Unknown error
    return '알 수 없는 에러가 발생했습니다.';
  };

  const errorMessage = getErrorMessage(error);

  return (
    <div role="alert" className="rounded border border-red-400 bg-red-100 p-4">
      <h2 className="text-lg font-semibold text-red-800">에러가 발생했습니다</h2>
      <p className="text-red-600">{errorMessage}</p>
      <button
        onClick={handleClickReset}
        className="mt-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        다시 시도
      </button>
    </div>
  );
};
