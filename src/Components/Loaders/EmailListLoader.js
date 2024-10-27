import React from 'react';

const EmailListLoader = () => {
  return (
    <div className="mt-12 space-y-6">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="animate-pulse flex items-start p-4 border rounded-lg shadow-sm bg-white border-gray-200">
          <div className="w-10 h-10 rounded-full bg-borderColor"></div>

          <div className="ml-4 space-y-4 flex-grow">
            <div className="h-4 bg-borderColor rounded w-3/4"></div>
            <div className="h-4 bg-borderColor rounded w-1/2"></div>
            <div className="h-4 bg-borderColor rounded w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailListLoader;
