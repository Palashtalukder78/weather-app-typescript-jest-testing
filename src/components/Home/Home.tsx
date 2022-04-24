import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const [country, setCountry] = useState<string>('');
    const history= useHistory();
    return (
        <div data-testid="home">
            <div>
                <h3>Search Country</h3>
            </div>
            <div style={{width:"500px", margin:"auto"}}>
                <TextField style={{width:"80%", margin:"15px 0"}} id="outlined-basic" label="Enter Country" variant="outlined" 
                onChange={(e)=>setCountry(e.target.value)}
                />
                <Button onClick={()=>history.push(`/country/${country}`)} style={{width:"80%"}}variant="contained">Search</Button>
            </div>
        </div>
    );
};

export default Home;