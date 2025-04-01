const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-screen">
        <div className="mx-auto my-auto flex w-full flex-col justify-between gap-[40px] rounded-[16px] bg-none px-[40px] py-[48px] sm:w-[400px] sm:bg-base">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
