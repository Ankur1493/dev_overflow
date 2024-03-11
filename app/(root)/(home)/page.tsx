import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="text-3xl">hello Ankur this side</div>
      <UserButton />
    </div>
  )
}
