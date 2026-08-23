export function shouldShowHomeSkeleton(authLoading: boolean, isAuthenticated: boolean, dashboardLoading: boolean) {
  return authLoading || (isAuthenticated && dashboardLoading);
}
