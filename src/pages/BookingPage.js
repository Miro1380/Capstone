import Nav from "../components/Nav";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import {useState} from "react";

const BookingPage = () => {
    const [timeOptions,setTimeOptions] = useState([
        {id:1,value:"17:00",label:"17:00"},
        {id:2,value:"18:00", label:"18:00"},
        {id:3,value:"19:00", label:"19:00"},
        {id:4,value:"20:00", label:"20:00"},
        {id:5,value:"21:00", label:"21:00"},
        {id:6,value:"22:00", label:"22:00"},]);
        
    return(
        <>
        <Nav/>
        <BookingForm timeOptions={timeOptions} setTimeOptions={setTimeOptions}/>
        <Footer/>
        </>
    )
}

export default BookingPage;