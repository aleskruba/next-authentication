import getCurrentUser from "@/app/actions/getCurrentUser"
import DesktopSidebar from "./DesktopSidebar"
import MobileFooter from "./MobileFooter"


export const Sidebar = async ({children}:{children:React.ReactNode}) => {

const currentUser = await getCurrentUser()
  return (
    <div className="h-screen ">
        <DesktopSidebar currentUser={currentUser!} />
        <MobileFooter />
      <main className="lg:pl- h-full ">
       {children}
       <div>Hello</div>
       </main>
    </div>
  )
}
