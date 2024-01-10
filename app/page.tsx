import { ModeToggle } from "@/components/actions/theme-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <ModeToggle />
                <Button>Click me</Button>
            </div>
        </main>
    );
}
