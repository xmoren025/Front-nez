"use client";

import React from "react";
import { useState, useEffect } from "react";

import {
  Typography,
  Link,
  Button,
  TextField,
  Divider,
  Box,
  InputAdornment,
} from "@mui/material";

import Email from "@mui/icons-material/Email";

import styles from './Forms.module.css';



function ForgotPasswordForm() {const [userData, setUserData] = useState({  
        email: "",
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = ({ target: { name, value } }) => {
        setUserData({ ...userData, [name]: value });
        
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleBlur = ({ target: { name } }) => {
        setTouched(prev => ({ ...prev, [name]: true }));
        validateField(name, userData[name]);
    };

    const validateField = (name, value) => {
        let error = '';
        
        switch (name) {
            case 'email':
                if (!value) {
                    error = 'Email is required';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    error = 'Email is invalid';
                }
                break;
            default:
                break;
        }
        
        setErrors(prev => ({ ...prev, [name]: error }));
        return !error;
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        
        const allTouched = {
            email: true,
        };
        setTouched(allTouched);
        
        const isEmailValid = validateField('email', userData.email);
        const isPasswordValid = validateField('password', userData.password);
        
        if (isEmailValid) {
            console.log('Form submitted:', userData);
            alert('Email sent successfully!');
            //Here the process - Sending link to the email...
        }
    };

    useEffect(() => {
        console.log('User data updated:', userData);
    }, [userData]);

    return (
        <Box className={styles.container}>
            {/* Form Section */}
            <Box className={styles.loginSection}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    className={styles.loginContainer}
                    noValidate
                >
                    <Typography variant="h4" className={styles.title}>
                        Forgot your password?
                    </Typography>
                    
                    <Typography variant="body1" className={styles.subtitle}>
                        Please enter your email to reset the password
                    </Typography>
                    
                    <Divider className={styles.divider} />

                    {/* Email Field */}
                    <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        className={styles.textField}
                    />

                    <Button
                        variant="contained"
                        type="submit"
                        href="/auth/login"
                        fullWidth
                        className={styles.submitButton}
                    >
                        Sen Email
                    </Button>

                    <Box className={styles.linksContainer}>
                        <Link
                            href="/auth/forgot-password"
                            underline="hover"
                            className={styles.link}
                        >
                            I forgot my password
                        </Link>

                        <Link 
                            href="/auth/register-user" 
                            underline="hover" 
                            className={styles.link}
                        >
                            Register a new user
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
export default ForgotPasswordForm;
