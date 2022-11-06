import React, { useState } from 'react'
import Container from '@mui/material/Container';
import { fabClasses, Input, TextField } from '@mui/material';
import './sidebar.css'


function SideBar({openmodal}) {
    const [openfiles, setopenfiles] = useState(false);
    const [familyState, setFamilyState] = useState(
        [{
            "id": 0,
            "title": "General",
        }
        ])

    const openFiles = () => {
        setopenfiles(!openfiles)
    }

    return (
        <div className='sidebar'>

            <div className='side-upper-part'>
                <Container>
                    <h5 className='family-title'>Family Tree</h5>
                    <div>
                        <TextField placeholder={'search'} name='search' id="outlined-basic" label="search" variant="outlined" />
                    </div>

                    <div className='lists'>

                        {familyState.map((item, index) => (
                            <div key={index} className='multiple-list-item'>
                                <div className={`list-item ${(familyState.find(item => item?.id === index)&&openfiles) && 'list-open'}`}>
                                    <span>
                                        <img onClick={() => openFiles()} src="/down.png" alt={`arrow-down`} className='arrow-down' />
                                        <img src="/file.png" alt='file-icon' className='file-icon' />
                                    </span>
                                    <span className='title'>{item.title}</span>
                                </div>
                                <div className={`sub-item ${(familyState.find(item => item?.id === index)&&openfiles) && 'list-open'}`}>
                                    first chield
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            <div className='btn-section'>
                <button onClick={()=>openmodal()} className='btn'>Add Family</button>
                <button className='btn'>Print Family</button>
            </div>
        </div>
    )
}

export default SideBar
