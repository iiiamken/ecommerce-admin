import { MainNav } from "@/components/main-nav"
import { UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>store switcher</div>
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSwitchSessionUrl="/" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
