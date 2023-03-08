import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
defaultOptions: {
  queries: {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30, // 30 seconds
  }
}
});