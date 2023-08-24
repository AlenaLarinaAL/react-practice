import { useLogoutRedirect } from "../hooks/useLogoutRedirect";

export const DashBoardPage = () => {
  useLogoutRedirect();
  return (
    <>
      <div>DashBoardPage</div>
    </>
  );
};
