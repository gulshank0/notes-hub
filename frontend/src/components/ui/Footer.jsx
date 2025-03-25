export const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 pt-80">
      <div className="container mx-auto flex flex-col md:flex-row space-x-8  items-center">
        <p className="text-xl text-gray-400">
          © {new Date().getFullYear()} Notes Hub. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-xl text-gray-400 hover:text-blue-500 transition duration-200"
          >
            Twitter
          </a>
          <a
            href="https://Instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-400 hover:text-blue-500 transition duration-200"
          >
           Instagram 
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-400 hover:text-blue-500 transition duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
