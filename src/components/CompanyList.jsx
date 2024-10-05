import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
    Card,
    Text,
    Title,
    List,
    Divider,
    Group,
    Button,
    Skeleton,
} from "@mantine/core";
import { fetchCompanies } from "../api/api";
import "../css/CompanyList.css"; // Importing CSS for styling

const CompanyList = ({ onSelect, className }) => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCompanies()
            .then((response) => setCompanies(response.data.data))
            .catch((error) => console.error("Error fetching companies:", error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Skeleton height={400} animate />;

    return (
        <List spacing="sm" size="sm" className={className} center>
            {companies.map((company) => (
                <Card
                    key={company.id}
                    shadow="lg"
                    padding="lg"
                    radius="md"
                    withBorder
                    onClick={() => onSelect(company)}
                    className="company-card"
                >
                    <Group position="apart">
                        <Title order={4} className="company-name">
                            {company.name}
                        </Title>
                        <Button variant="light" size="xs" color="blue">
                            View Details
                        </Button>
                    </Group>
                    <Text color="dimmed" className="company-website">
                        {company.website || "No website"}
                    </Text>
                    <Text color="dimmed" size="sm" className="company-email">
                        {company.email || "No email"}
                    </Text>
                    <Divider my="sm" />
                </Card>
            ))}
        </List>
    );
};

CompanyList.propTypes = {
    onSelect: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default CompanyList;
