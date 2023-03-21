import {Route, Routes} from "react-router-dom"
import MainPage from "../components/mainPage/mainPage"
import FirstLab from "../components/labs/firstLab/firstLab"
import ErrorPage from "../components/errorPage/errorPage"

function AppRoutes() {
    return (<Routes>
        <Route path={"/amo-labs/"} element={<MainPage />} />
        <Route path={"/amo-labs/labs/1"} element={<FirstLab />} />
        <Route path={"*"} element={<ErrorPage header={"404"} subtext={"Not found"} />} />
    </Routes>)
}

export default AppRoutes