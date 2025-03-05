import { UserButton } from "@clerk/nextjs"

const SetupPage = () => {
  return (
    <div className="p-4">
      This is a protected route!
      <UserButton />
    </div>
  )
}
export default SetupPage
