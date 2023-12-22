import { RouterProvider } from "react-router-dom"
import { mainRoute } from "./Routes/mainRoute"
import BackToTopButton from "./Components/common/BackToTop"
import { Suspense } from "react"



const App = () => {
  return (
    <div>
    <RouterProvider router = {mainRoute} />
    <BackToTopButton/>
    <Suspense/>
    </div>
  )
}

export default App