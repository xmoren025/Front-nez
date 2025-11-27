import { useEffect, useState } from "react";





export default function ProtectedRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const authenticateUser = async () => {
        response = await fetch("/api/auth/check-session", {method: "POST", body: JSON.stringify({})});
        data = await response.json();
        setIsAuthenticated(data.authenticated);
    }

    useEffect(() => {
        setIsAuthenticated();
    }, []);


    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : isAuthenticated ? (
                children
            ) : (
                <div>Please log in to access this page.</div>
            )}
        </>
    );

}