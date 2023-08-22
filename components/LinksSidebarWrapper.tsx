const LinksSidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center xl:items-start space-y-2">
      {children}
    </div>
  );
};

export default LinksSidebarWrapper;
