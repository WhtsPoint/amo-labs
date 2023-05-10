import {Route, Routes} from "react-router-dom"
import MainPage from "../components/mainPage/mainPage"
import FirstLab from "../components/labs/firstLab/firstLab"
import ErrorPage from "../components/errorPage/errorPage"
import SecondLab from "../components/labs/secondLab/secondLab"
import ThirdLab from "../components/labs/thirdLab/thirdLab"
import FourthLab from "../components/labs/fourthLab/fourthLab"
import FifthLab from "../components/labs/fifthLab/fifthLab"

function AppRoutes() {
    return (<Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/labs/1"} element={<FirstLab />} />
        <Route path={"/labs/2"} element={<SecondLab />} />
        <Route path={"/labs/3"} element={<ThirdLab />} />
        <Route path={"/labs/4"} element={<FourthLab />} />
        <Route path={"/labs/5"} element={<FifthLab />} />
        <Route path={"*"} element={<ErrorPage header={"404"} subtext={"Page not found"} />} />
    </Routes>)
}

export default AppRoutes