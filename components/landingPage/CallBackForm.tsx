'use client';

const CallbackForm = () => {
  return (
    <div className="bg-white w-full py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          <div className="md:col-span-1">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="md:col-span-1">
             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="md:col-span-1">
             <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="md:col-span-1">
            <button
              type="submit"
              className="w-full bg-red-700 text-white font-bold p-3 rounded-md hover:bg-red-800 transition-colors"
            >
              Request Callback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CallbackForm;