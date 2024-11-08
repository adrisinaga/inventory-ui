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
    <div className="flex h-full flex-col bg-muted pt-5">
      <div className="px-3 py-2">
        <div className="flex h-12 items-center px-4">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <LayoutDashboard className="h-6 w-6" />
            <span className="font-bold">Admin Panel</span>
          </Link>
        </div>
      </div>
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1 py-4">
          {routes.map((route) => (
            <Button
              key={route.href}
              variant={pathname === route.href ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start',
                pathname === route.href && 'bg-secondary'
              )}
              asChild
            >
              <Link href={route.href}>
                <route.icon className="mr-2 h-4 w-4" />
                {route.label}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}