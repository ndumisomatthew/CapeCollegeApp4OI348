import React from 'react';
import { useLogin, useNotify, useRedirect,CreateButton } from 'react-admin';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const CustomLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const redirect = useRedirect();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await login({ username, password });
            redirect('/'); // Redirect to the home page after successful login
        } catch (error) {
            notify('Login failed. Please check your username and password.', 'warning');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#f0f0f0',
            }}
        >
            <Box display="flex" justifyContent="center" mb={2}>
                <img src="/cape_college_logo.png" alt="Cape College Logo" style={{ width: '200px', height: 'auto' }} />
            </Box>
            <Typography variant="h4" gutterBottom>
                Welcome to Cape College 
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
            <Typography variant="body1" style={{ marginTop: '20px' }}>
            Don't have an account? <CreateButton  resource="users" label="Create Profile" />
            </Typography>
        </Box>
    );
};

export default CustomLoginPage;
