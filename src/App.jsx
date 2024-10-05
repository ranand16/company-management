import { useState, Suspense, lazy } from "react";
import { Button, Container, Group, Title, Text } from "@mantine/core";
import { isAuthenticated, logout } from "./auth";
import "./css/app.css";

const LoginPage = lazy(() => import("./components/LoginPage"));
const CompanyList = lazy(() => import("./components/CompanyList"));
const CompanyDetail = lazy(() => import("./components/CompanyDetail"));
const AddCompanyForm = lazy(() => import("./components/AddCompanyForm"));

function App() {
    const [loggedIn, setLoggedIn] = useState(isAuthenticated());
    const [selectedCompany, setSelectedCompany] = useState(null);

    const handleLogin = () => setLoggedIn(true);
    const handleLogout = () => {
        logout();
        setLoggedIn(false);
        setSelectedCompany(null);
    };
    const handleSelectCompany = (company) => setSelectedCompany(company);
    const handleAddCompany = () => setSelectedCompany(null);

    if (!loggedIn) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <LoginPage onLogin={handleLogin} />
            </Suspense>
        );
    }

    return (
        <Container>
            <Group position="right" mb="md">
                <Button onClick={handleLogout}>Logout</Button>
            </Group>
            <Title order={2} align="center" mb="md">
                Welcome to the Company Management System
            </Title>
            <Text align="center" mb="md">
                This application allows you to manage company information
                seamlessly. You can view details of existing companies, add new
                companies, and select a company to see more information. Use the
                Add Company form to get started.
            </Text>
            <Suspense fallback={<div>Loading...</div>}>
                {selectedCompany ? (
                    <CompanyDetail company={selectedCompany} />
                ) : (
                    <>
                        <AddCompanyForm
                            onCompanyAdded={handleAddCompany}
                            className={"component-spacing"}
                        />
                        <CompanyList
                            onSelect={handleSelectCompany}
                            className={"component-spacing"}
                        />
                    </>
                )}
            </Suspense>
        </Container>
    );
}

export default App;
