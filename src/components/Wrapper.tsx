import React, { FunctionComponent, ReactNode } from "react";

const Wrapper: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className="w-[500px] h-auto flex items-center justify-center bg-[#15293a66] rounded-[10px] border-4 border-[#131332] shadow-2xl  flex-col">
      {children}
    </div>
  );
};

export default Wrapper;
