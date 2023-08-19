import { FC, ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback: FC<{ error: Error }> = ({ error }) => {
    return (
        <div role="alert" className="absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 border-2 border-red-900 rounded-xl p-5 bg-red-800 shadow-2xl animate-pulse">
            <code className="text-3xl">ERROR HAPPENED</code>
        <pre className="text-2xl">ERROR MESSAGE : <span className="italic">{error.message}</span></pre>
        </div>
    );
    };

export const ErrorBoundaryWrapper: FC<{children:ReactNode}> = ({ children }) => {
    return (
        <ErrorBoundary fallbackRender={ErrorFallback}>{children}</ErrorBoundary>
    );
}