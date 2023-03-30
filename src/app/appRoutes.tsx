import {Route, Routes} from "react-router-dom"
import MainPage from "../components/mainPage/mainPage"
import FirstLab from "../components/labs/firstLab/firstLab"
import ErrorPage from "../components/errorPage/errorPage"
import SecondLab from "../components/labs/secondLab/secondLab"

function AppRoutes() {
    return (<Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/labs/1"} element={<FirstLab />} />
        <Route path={"/labs/2"} element={<SecondLab />} />
        <Route path={"*"} element={<ErrorPage header={"404"} subtext={"Page not found"} />} />
    </Routes>)
}

export default AppRoutes