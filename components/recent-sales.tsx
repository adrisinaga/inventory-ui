import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sarah Davis</p>
          <p className="text-sm text-muted-foreground">sarah@example.com</p>
        </div>
        <div className="ml-auto font-medium">+$1,999.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">James Lee</p>
          <p className="text-sm text-muted-foreground">james@example.com</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Isabel Nguyen</p>
          <p className="text-sm text-muted-foreground">isabel@example.com</p>
        </div>
        <div className="ml-auto font-medium">+$299.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" alt="Avatar" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Alex Rodriguez</p>
          <p className="text-sm text-muted-foreground">alex@example.com</p>
        </div>
        <div className="ml-auto font-medium">+$99.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=200&h=200&fit=crop" alt="Avatar" />
          <AvatarFallback>KM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Kate Miller</p>
          <p className="text-sm text-muted-foreground">kate@example.com</p>
        </div>
        <div className="ml-auto font-medium">+$199.00</div>
      </div>
    </div>
  )
}