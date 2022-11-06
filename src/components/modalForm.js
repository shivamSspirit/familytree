import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Button, Input } from '@mui/material';
import './modalform.css'
import * as familyActions from '../actions/family'
import { useDispatch } from 'react-redux'

function ModalForm() {
    const [formdata, setFormData] = useState({
        username: "",
        spouse: "",
        locations: "",
        birthYear: "",
        presentAddress: ""
    })
    const [familyPhoto, setFamilyPhoto] = useState("");

    const dispatch = useDispatch()

    const handleuserChange = (e) => {
        const name = e.target.name;
        if (name === 'username') {
            setFormData({
                ...formdata,
                username: e.target.value
            })
        }
        if (name === 'spouse') {
            setFormData({
                ...formdata,
                spouse: e.target.value
            })
        }
        if (name === 'locations') {
            setFormData({
                ...formdata,
                locations: e.target.value
            })
        }
        if (name === 'birthYear') {
            setFormData({
                ...formdata,
                birthYear: e.target.value
            })
        }
        if (name === 'presentAddress') {
            setFormData({
                ...formdata,
                presentAddress: e.target.value
            })
        }
    }

    const handlephotoChange = (e) => {
        setFamilyPhoto(e.target.files[0]);
    }

    const onFamilyDataSubmit = (e) => {
        e.preventDefault();
        const familyformdata = new FormData();
        familyformdata.append("familyData",JSON.stringify({...formdata}))
        familyformdata.append("familypic",familyPhoto)
        
        dispatch(familyActions?.addfamilyData(familyformdata, () => {
            console.log('adding family to server')
        }))
    }

    return (
        <div>
            <div className='modalform'>
                <Box sx={{
                    width: '100%',
                    height: 300,
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 1,
                    justifyContent: "center",
                    backgroundColor: 'transparent'
                }}>
                    <h3 style={{ textAlign: 'center' }}>Fill family details</h3>
                    <form className='forms' onSubmit={onFamilyDataSubmit}>
                        <Input placeholder={'username'} name='username' value={formdata.username} onChange={handleuserChange} id="outlined-basic" label="Outlined" variant="outlined" />
                        <Input placeholder={'spousename'} name='spouse' value={formdata.spouse} onChange={handleuserChange} id="outlined-basic" label="Outlined" variant="outlined" />
                        <Input placeholder={'location'} name='locations' value={formdata.locations} onChange={handleuserChange} id="outlined-basic" label="Outlined" variant="outlined" />
                        <Input placeholder={'birthYear'} name='birthYear' value={formdata.birthYear} onChange={handleuserChange} id="outlined-basic" label="Outlined" variant="outlined" />
                        <Input placeholder={'presentAddress'} name='presentAddress' value={formdata.presentAddress} onChange={handleuserChange} id="outlined-basic" label="Outlined" variant="outlined" />
                        <div>
                            <input type={'file'} value={''} name='familypic' onChange={handlephotoChange} />
                        </div>
                        <Button onClick={e=>onFamilyDataSubmit(e)} variant="outlined">Outlined</Button>
                    </form>
                </Box>

            </div>
        </div>
    )
}

export default ModalForm
