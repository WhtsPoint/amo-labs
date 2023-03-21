import {Route, Routes} from "react-router-dom"
import MainPage from "../components/mainPage/mainPage"
import FirstLab from "../components/labs/firstLab/firstLab"

function AppRoutes() {
    return (<Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/labs/1"} element={<FirstLab />} />
    </Routes>)
}

export default AppRoutes