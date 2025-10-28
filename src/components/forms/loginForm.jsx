// components/LoginForm.jsx
"use client"
import React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Image from 'next/image';
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import { Email, Lock, Check } from "@mui/icons-material";

import styles from './LoginForm.module.css';

function LoginForm() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
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
            case 'password':
                if (!value) {
                    error = 'Password is required';
                } else if (value.length < 8) {
                    error = 'Password must be at least 8 characters';
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
            password: true,
        };
        setTouched(allTouched);
        
        const isEmailValid = validateField('email', userData.email);
        const isPasswordValid = validateField('password', userData.password);
        
        if (isEmailValid && isPasswordValid) {
            console.log('Form submitted:', userData);
            alert('Login successful!');
        }
    };

    useEffect(() => {
        console.log('User data updated:', userData);
    }, [userData]);

    return (
        <Box className={styles.container}>
            {/* Brand Section */}
            <Box className={styles.brandSection}>
                <Image
                            src="/logos/logo-nez-512sinfondo.png"
                            alt="Nez Logo"
                            width={200}
                            height={80}
                            className={styles.logo}
                            priority
                          />
                
                <Box component="ul" className={styles.featureList}>
                    <Box component="li" className={styles.featureItem}>
                        <Check className={styles.checkIcon} />
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </Box>
                    <Box component="li" className={styles.featureItem}>
                        <Check className={styles.checkIcon} />
                        <Typography variant="body1">
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Box>
                    <Box component="li" className={styles.featureItem}>
                        <Check className={styles.checkIcon} />
                        <Typography variant="body1">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Login Section */}
            <Box className={styles.loginSection}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    className={styles.loginContainer}
                    noValidate
                >
                    <Typography variant="h4" className={styles.title}>
                        Sign in
                    </Typography>
                    
                    <Typography variant="body1" className={styles.subtitle}>
                        Sign in to start your session
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

                    {/* Password Field */}
                    <TextField
                        required
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={userData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        autoComplete="current-password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        className={styles.textField}
                    />

                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        className={styles.submitButton}
                    >
                        Log in
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

export default LoginForm;