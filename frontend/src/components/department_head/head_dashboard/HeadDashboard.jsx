import { HeadSidebar } from "./HeadSidebar";

export const HeadDashboard = () => {
  return (
    <div className="grid desktop:grid-cols-[320px_1fr] h-[100dvh]">
      <HeadSidebar />
    </div>
  );
};
