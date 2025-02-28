import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

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
          alt="Not Found" 
          className="w-full max-w-md h-auto rounded-lg shadow-lg"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold text-red-600 mb-4">Error 404</h1>
        <p className="text-xl text-gray-700 mb-4">Page not found</p>
      </div>
      <button 
        onClick={handleGoBack} 
        className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Return to last page
      </button>
    </div>
  );
};

export default NotFoundPage;
