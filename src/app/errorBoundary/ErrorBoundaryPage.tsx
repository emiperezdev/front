import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorBoundaryPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <div className="mb-8">
        <img 
          src="path-to-your-image.jpg" 
          alt="Error" 
          className="w-full max-w-md h-auto rounded-lg shadow-lg"
        />
      </div>
      <div>
        <h1 className="text-4xl font-semibold text-red-600 mb-4">Something went wrong</h1>
        {error instanceof Error && (
          <pre className="bg-gray-800 text-white p-4 rounded-lg text-sm">{error.message}</pre>
        )}
      </div>
      <button 
        onClick={handleGoBack} 
        className="mt-6 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Return to last page
      </button>
    </div>
  );
};

export default ErrorBoundaryPage;
