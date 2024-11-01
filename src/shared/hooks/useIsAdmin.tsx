export const useIsMainApp = () => {
  const pathname = location.pathname;
  const isAdmin = pathname.toLowerCase().includes("admin");

  return !isAdmin;
};
