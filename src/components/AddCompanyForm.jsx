import PropTypes from "prop-types";
import { useState, useCallback } from "react";
import { createCompany } from "../api/api";
import { TextInput, Button, Card, Title, Group } from "@mantine/core";

const AddCompanyForm = ({ onCompanyAdded, className }) => {
    const [name, setName] = useState("");
    const [website, setWebsite] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = useCallback(async () => {
        try {
            await createCompany({ name, website, email });
            alert("Company created successfully!");
            setName("");
            setWebsite("");
            setEmail("");
            onCompanyAdded();
        } catch {
            alert("Failed to create company");
        }
    }, [name, website, email, onCompanyAdded]);

    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            className={className}
            withBorder
        >
            <Title order={3}>Add a New Company</Title>
            <Group direction="column" grow>
                <TextInput
                    label="Company Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter company name"
                />
                <TextInput
                    label="Website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="Enter company website"
                />
                <TextInput
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter contact email"
                />
                <Button onClick={handleSubmit} fullWidth>
                    Add Company
                </Button>
            </Group>
        </Card>
    );
};

AddCompanyForm.propTypes = {
    onCompanyAdded: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default AddCompanyForm;
