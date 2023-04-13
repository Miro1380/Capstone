
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI,submitAPI } from "../timeAPI";

const BookingForm = ({timeOptions,setTimeOptions}) => {

    const navigate = useNavigate();
    //State vars for Date,Time, number, and occassion
    const [form,setForm] = useState({
        date:'',
        availableTime:'',
        number: 0,
        occasion:'Birthday',
    });

    const handleChange = (e) => {
        if(e.target.name === 'date'){
            console.log("Value DATE: ", e.target.value)
        }

        setForm(() => ({
            ...form,
            [e.target.name]:e.target.value,
        }))
    }

     //API DATA
     useEffect(() => {
        //let date = new Date(form.date);
        
        //const testDate = new Date().toJSON().slice(0,10);
        const testDate = new Date();
        console.log("Today's DATE:" , testDate);
        let times = fetchAPI(testDate);
        console.log(times);

        return () => {
            for(let i=0; i < times.length; i++){
                console.log(times.at(i))
                console.log();
            }
            setTimeOptions(times);
        };
    }, []);


//Check form after submit and remove selected time from available times.
const handleSubmit = (e) => {
    console.log("Submitted form: ",form);
    const newTimes = [];
    timeOptions.filter((item) => {
        if(item.value !== form.availableTime){
                newTimes.push(item);
            }
            return newTimes;
        })
        setTimeOptions(newTimes);
        console.log("Updating Times: " , newTimes);
        e.preventDefault();

        for(let key in form){
            let val = form[key];
        }

        console.log("Checking form...")

        navigate("/confirmed")


}
    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    name="date"
                    id="res-date"
                    value={form.date}
                    onChange={handleChange}/>
                <label htmlFor="res-time">Choose time</label>
                <select
                id="res-time "
                name="availableTime"
                value={form.availableTime}
                onChange={handleChange}
                >
                 {timeOptions.map((item) => <option key={item.id} value = {item.value}> {item.label} </option>)}
                </select>
                <label htmlFor="guests" data-test-id="label">Number of guests</label>
                <input
                    data-test-id="increment"
                    type="number"
                    placeholder="1"
                    min="1" max="10"
                    name="number"
                    id="guests"
                    value={form.number}
                    onChange={ handleChange}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" value={form.occasion}
                    onChange={handleChange}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input id="frm-bttn"type="submit" value="Make Your reservation"/>
            </form>
        </>
    )
}

export default BookingForm;