import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import AddBookLayout from "./layouts/AddBookLayout";
import ReservationLayout from "./layouts/ReservationLayout";
import Login from "./pages/Login";
import Addresses from "./pages/addBook/Addresses";
import Main from "./pages/Main";
import MyReservation from "./pages/reservation/MyReservation";
import ReservationCalendarLayout from "./layouts/ReservationCalendarLayout";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Login/>}/>
        <Route path="aurora" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="address-book" element={<AddBookLayout/>}>
            <Route index element={<Addresses/>}/>
            <Route path="addresses" element={<Addresses category='전체 주소록'/>}/>
            <Route path="personal-groups/:groupCode" element={<Addresses category='개인 주소록'/>}/>
            <Route path="team-groups/:groupCode" element={<Addresses category='공용 주소록'/>}/>
          </Route>
          <Route path="reservation" element={<ReservationLayout/>}>
            {/* <Route index element={<MyReservation/>}/> */}
            <Route path="my-reservation" element={<MyReservation/>}/>
            <Route path="assets/:assetCode" element={<ReservationCalendarLayout/>}/>
          </Route>
        </Route>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
