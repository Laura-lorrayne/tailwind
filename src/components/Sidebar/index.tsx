import { Logo } from "./Logo";
import * as Input from "@/components/Input";
import { MainNavigation } from "./MainNavigation";
import { Search, LifeBuoy, Cog } from "lucide-react";
import { NavItem } from "./Navitem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";

export function Sidebar() {
    return (
        <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6">
            <Logo />

            <Input.Root>
                <Input.Prefix>
                    <Search className="h-5 w-5 to-zinc-500" />
                </Input.Prefix>
                <Input.Control placeholder="Search" />
            </Input.Root>

            <MainNavigation />

            <div className="mt-auto flex flex-col gap-6">
                <nav className="space-y-0.5">
                    <NavItem title="Support" icon={LifeBuoy} />
                    <NavItem title="Settings" icon={Cog} />
                </nav>
                <UsedSpaceWidget />
                <div className="h-px bg-zinc-200" />

                <Profile />
            </div>
        </aside>
    );
}
