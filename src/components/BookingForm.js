
import {useReducer, useState} from "react";

const BookingForm = ({timeOptions,setTimeOptions}) => {
    //State vars for Date,Time, number, and occassion
    const [form,setForm] = useState({
        date:'',
        availableTime:'',
        number: 0,
        occasion:'Birthday',
    });

    const handleChange = (e) => {
        setForm(() => ({
            ...form,
            [e.target.name]:e.target.value,
        }))
    }



const handleSubmit = (e) => {
    console.log("Submitted: ",form);
    const newTimes = [];
   timeOptions.filter((item) => {
        if(item.value !== form.availableTime){
                newTimes.push(item);
                //console.log("ADDING TO NEW: " + item.value)
            }
            return newTimes;
        })
        setTimeOptions(newTimes);
        console.log("Updating Times: " , newTimes);
        e.preventDefault();
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
                 {timeOptions.map(item => <option key={item.id} value ={item.value}> {item.label} </option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
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