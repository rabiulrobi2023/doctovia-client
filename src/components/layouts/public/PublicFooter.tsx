const PublicFooter = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="h-32 bg-gray-100">
      <div className="text-center flex justify-center items-center h-full">
        <p>&copy;{year} Doctovia. All rights reserved</p>
      </div>
    </footer>
  );
};

export default PublicFooter;
