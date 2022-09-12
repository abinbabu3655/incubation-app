import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from '../components/login';
import Signup from '../components/SignUp';
import { Paper } from '@material-ui/core';

const SignInOutContainer = () => {
    const [value, setValue] = useState(0);
    const paperStyle = {width:340,margin:"20px auto"}
    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      

    return (
        <div>
            <Paper style={paperStyle} elevation={20}>
            <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                <Tab label="Login" />
                <Tab label="SignUp" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Login handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Signup/>
            </TabPanel>
            </Paper>
            

        </div>
    )
}

export default SignInOutContainer