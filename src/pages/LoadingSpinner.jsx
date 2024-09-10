const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-b-4 border-yellow-500 rounded-full animate-spin delay-200"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-b-4 border-slate-900 rounded-full animate-spin delay-400"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
