import NaV from "../(component)/nav";
import TopNav from "../(component)/topnav";
import { UnivContext } from "../(component)/uni";

 
 

 
 
 
 
 
 
export default    function RootLayout({ children }) {

  return (
   <UnivContext>
      <main className="w-full h-screen  overflow-hidden  justify-center flex">
  
      <section className="w-full flex  max-w-[1980px] bg-white">
  <NaV/>
  <main className="flex-1 w-full overflow-auto bg-lightblack   flex flex-col">
  <TopNav/>
      {/* <BankLoader/> */}
          {children}
  
  </main>
      </section>
      </main>
      </UnivContext>
      
        
   
  )
}
