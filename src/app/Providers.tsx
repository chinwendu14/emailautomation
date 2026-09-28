"use client";

import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
// import SocketProvider from "@/context/socket.context";
// import ConversationProvider from "@/context/conversation.context";

export function Providers({ children }: { children: React.ReactNode }) {
  // const [queryClient] = useState(() => new QueryClient());
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false, // 🔥 disable auto retry globally
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        {children}
        <ToastContainer />
      </SessionProvider>
    </QueryClientProvider>
  );
}
