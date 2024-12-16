// Desc: Main App component for the HRD-frontend application. This component is the root component of the application and is rendered by the main.jsx file. The component contains an h1 element with the text "HRD-frontend".
import Navbar from "./components/navbar/navbar"
import HomePage from "./pages/HomePage"


function App() {

  return (
    <>
      <Navbar />
      <HomePage />
    </>
  )
}

export default App
