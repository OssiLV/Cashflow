"use client";

// import { ModeToggle } from "@/components/actions/theme-toggle";
import { ModalCreateRoom } from "@/components/modals/modal-create-room";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";

import Image from "next/image";

function ListRoom({ id, name }: { id: number; name: string }) {
    const router = useRouter();
    return (
        <div>
            <Button
                variant="ghost"
                className="w-full flex justify-start"
                onClick={() => router.push(`/room/${id}`)}
            >
                <p className="">{name}</p>
            </Button>
        </div>
    );
}

export default function Home() {
    const rooms = [
        { id: 1, name: "room1" },
        { id: 2, name: "room2" },
        { id: 3, name: "room3" },
        { id: 4, name: "room4" },
        { id: 5, name: "room5" },
        { id: 6, name: "room6" },
        { id: 7, name: "room7" },
        { id: 8, name: "room8" },
        { id: 9, name: "room9" },
        { id: 10, name: "room10" },
        { id: 11, name: "room11" },
        { id: 12, name: "room12" },
    ];
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="shadow-Neumorphism rounded-[50px] w-[22rem] h-[32rem] bg-[#e5e1e1] flex gap-2 flex-col items-center  p-12">
                <h1 className=" font-bold text-xl select-none">
                    Cashflow Tool
                </h1>
                <ModalCreateRoom>
                    <Button
                        size="sm"
                        className="w-[16rem] select-none"
                        variant="secondary"
                    >
                        Craete a room
                    </Button>
                </ModalCreateRoom>
                <Input
                    type="text"
                    placeholder="Search a room"
                    className="bg-[#dcd5d5]"
                />
                <ScrollArea className="flex border-[3px] border-[#473939] rounded-2xl w-[16rem] h-[18rem] px-2 py-3 select-none">
                    {rooms.map((room) => (
                        <ListRoom key={room.id} id={room.id} name={room.name} />
                    ))}
                </ScrollArea>
            </div>
        </main>
    );
}
