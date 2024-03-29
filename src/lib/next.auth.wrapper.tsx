'use client';
// sử dụng sessionProvider để có thể share session cho các component
import { SessionProvider } from 'next-auth/react';

// do sessionProvider ko htro ở server component -> use NextAuthWrapper để bọc
export default function NextAuthWrapper({ children }: { children: React.ReactNode }) {
    return <SessionProvider>{children}</SessionProvider>;
}
