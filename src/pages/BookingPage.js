import Nav from "../components/Nav";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import {useState} from "react";



const BookingPage = () => {
    const [timeOptions,setTimeOptions] = useState([]);

    
    return(
        <>
        <Nav/>
        <BookingForm timeOptions={timeOptions} setTimeOptions={setTimeOptions}/>
        <Footer/>
        </>
    )
}

export default BookingPage;