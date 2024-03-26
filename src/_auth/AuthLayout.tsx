import { Outlet, Navigate } from "react-router-dom" ;

const AuthLayout = () => {
    const isAuthenticated = false;
  return (
    <>
         {isAuthenticated ?(
          <Navigate to="/"/>
         ):(
          <>
            <section className="flex flex-1 py-10  justify-center flex-col items-center">
              <Outlet />
            </section >
            <img
              src= "../../public/assets/images/bg.jpg"
              className="hidden xl:block h-screen w- 1/2 object-contain bg-no-repeat"
              />
           
          </>
         )}
    </>
  )
}

export default AuthLayout
