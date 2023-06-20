import { useState } from 'react';
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import Button from '@mui/material/Button';

import "react-datepicker/dist/react-datepicker.css";

export const EventForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return <div>
        <p className="text-3xl font-bold underline text-center my-9">
            Event Manager
        </p>
        <div className='flex justify-center gap-9'>
            <p >
                <TextField
                    helperText="Please enter your name"
                    id="demo-helper-text-misaligned"
                    label="Name"
                />
                {/* <TextField id="outlined-basic" label="Name" size="small" variant="outlined" /> */}
            </p>
            <p className="flex flex-col gap-y-2">
                Start date:
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </p>
            <p className="flex flex-col gap-y-2">
                End date:
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
            </p>

            <p className="flex flex-col gap-y-2">
                <p>Recurring days :</p>
                <input list="browsers" name="browser" id="browser" placeholder='Recurring days'
                className='border-gray-50 border-opacity-20'/>
                <datalist id="browsers">

                    <option value="Daily" />
                    <option value="Weekly" />
                    <option value="Monthly" />
                    <option value="Annually" />
                </datalist>
            </p>
            <Button variant="outlined" size="large" className="Eventbutton"
            >Add Event</Button>
        </div>
    </div>
}