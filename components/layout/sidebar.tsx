'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LayoutDashboard, Package, Receipt } from 'lucide-react';

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    label: 'Inventory',
    icon: Package,
    href: '/inventory',
  },
  {
    label: 'Accounting',
    icon: Receipt,
    href: '/accounting',
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gray-900 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">Admin</h1>
        </Link>
        <ScrollArea className="flex-1">
          <div className="space-y-1">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={pathname === route.href ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  pathname === route.href ? 'bg-white/10' : 'hover:bg-white/10'
                )}
                asChild
              >
                <Link href={route.href}>
                  <route.icon className="h-5 w-5 mr-3" />
                  {route.label}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}