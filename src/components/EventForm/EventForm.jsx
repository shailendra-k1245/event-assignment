import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import "react-datepicker/dist/react-datepicker.css";

export const EventForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [name, setName] = useState("");
    const [recDays, setRecDays] = useState("");
    const [eventData, setEventData] = useState([]);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleRecDays = (e) => {
        setRecDays(e.target.value);
    }

    const handleSaveEvent = () => {
       let existingArr = JSON.parse(localStorage.getItem("eventDetails")) || [];
        existingArr.push({
            name,startDate,endDate,recDays
        })
        console.log("existing arr ",existingArr);

        localStorage.setItem("eventDetails",JSON.stringify(existingArr));
        setEventData(JSON.parse(localStorage.getItem("eventDetails")))
    }

    useEffect(() => {
        setEventData(JSON.parse(localStorage.getItem("eventDetails")))
    }, [name,startDate,endDate,recDays])

    console.log(eventData)

    return <div>
        <p className="text-3xl font-bold underline text-center my-9">
            Event Manager
        </p>
        <div className='flex justify-center gap-9'>
            <div >
                <TextField
                    helperText="Please enter your name"
                    id="demo-helper-text-misaligned"
                    label="Name"
                    onChange={handleName}
                />
            </div>
            <div className="flex flex-col gap-y-2">
                Start date:
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className="flex flex-col gap-y-2">
                End date:
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
            </div>

            <div className="flex flex-col gap-y-2">
                <p>Recurring days :</p>
                <input list="browsers" name="browser" id="browser" placeholder='Recurring days'
                    className='border-gray-50 border-opacity-20' onChange={handleRecDays} />
                <datalist id="browsers">

                    <option value="Daily" />
                    <option value="Weekly" />
                    <option value="Monthly" />
                    <option value="Annually" />
                </datalist>
            </div>
            <Button variant="outlined" size="large" className="Eventbutton"
                onClick={handleSaveEvent}
            >Add Event</Button>
        </div>
        <div>
            <Table>
                <TableHead>
                <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell align="right">Recurring Days</TableCell>
          </TableRow>
                </TableHead>
            </Table>
        </div>
    </div>
}