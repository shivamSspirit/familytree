import { Container } from '@mui/system'
import React from 'react'
import './sidepage.css'

function Sidepage() {
    return (
        <div className='sidepage-block'>
            <Container>
                <h5 className='family-detail-title'>Family Details</h5>

                <div className='page-lower-part'>
                    <span className='details-part'>
                        <span className='data-section'><p>Name</p> <p>:Shivam soni</p></span>
                        <span className='data-section'><p>Spouse</p> <p>:shmbaji raje</p></span>
                        <span className='data-section'><p>Location</p> <p>:Bhopal</p></span>
                        <span className='data-section'> <p>Birth Year</p> <p>:1980</p></span>
                        <span className='data-section'><p>Present Address</p> <p>:123 Patel Road Road Bhopal</p></span>
                    </span>
                    <span className='data-section'>
                        <p>Family Photo :</p>
                        <span>
                            <img className='family-photo' alt='family-photo' src='/super.jpg' />
                        </span>
                    </span>
                </div>

            </Container>
        </div>
    )
}

export default Sidepage
