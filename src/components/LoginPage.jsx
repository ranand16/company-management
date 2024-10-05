import PropTypes from "prop-types";
import { useState } from "react";
import { TextInput, Button, Card, Title } from "@mantine/core";
import { login } from "../auth"; // Import the login function from auth module

/**
 * LoginPage component renders a user authentication form.
 * It allows users to enter their username and password to log in.
 *
 * @param {function} onLogin - A callback function that is called upon successful login.
 */
export default function LoginPage({ onLogin }) {
    const [username, setUsername] = useState(""); // State to store the username
    const [password, setPassword] = useState(""); // State to store the password
    const [error, setError] = useState(""); // State to manage error messages
    // redeploy
    /**
     * Handle form submission.
     * Validates the credentials and triggers the login callback if successful.
     */
    const handleSubmit = () => {
        if (login(username, password)) {
            onLogin(); // Call the onLogin function passed as a prop
        } else {
            setError("Invalid credentials. Please try again."); // Set error message
        }
    };

    return (
        <Card
            padding="xl"
            shadow="sm"
            style={{ maxWidth: 400, margin: "auto" }}
        >
            <Title
                order={2}
                style={{ textAlign: "center", marginBottom: "1rem" }}
            >
                Login to Your Account
            </Title>
            <TextInput
                label="Username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <TextInput
                label="Password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ marginTop: "1rem" }}
            />
            {error && (
                <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>
            )}{" "}
            {/* Error message display */}
            <Button
                onClick={handleSubmit}
                color="blue"
                style={{ marginTop: "1.5rem" }}
            >
                Login
            </Button>
        </Card>
    );
}

LoginPage.propTypes = {
    onLogin: PropTypes.func.isRequired, // Prop type validation for the onLogin function
};
