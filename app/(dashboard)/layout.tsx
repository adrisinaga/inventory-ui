import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-72 md:flex-col">
        <Sidebar />
      </div>
      <div className="md:pl-72">
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      </div>
    </div>
  );
}