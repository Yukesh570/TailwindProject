import { Layout } from "./components/Layout";
import { Brands } from "./components/sections/Brands";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Yukesh } from "./components/sections/yukesh";


function App() {

  return <Layout title="Edge">
    <Hero />
    <Brands />
    <Services/>
  </Layout>;
}
   
  


export default App
