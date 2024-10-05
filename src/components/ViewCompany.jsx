import PropTypes from "prop-types";
import {
    Card,
    Text,
    Title,
    Divider,
    Group,
    Avatar,
    Badge,
} from "@mantine/core";

const ViewCompany = ({ company }) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Group align="center" mb="sm">
                <Avatar src={company.logoUrl || null} size={80} radius="xl" />
                <div>
                    <Title order={2}>{company.name}</Title>
                    <Text color="dimmed">
                        {company.website || "No website available"}
                    </Text>
                    <Text color="dimmed" size="sm">
                        {company.email || "No email available"}
                    </Text>
                </div>
            </Group>

            <Divider my="sm" />

            <Title order={4}>Head Office</Title>
            <Text>{company.headOffice?.name || "No head office name"}</Text>
            <Text>
                {company.headOffice?.address?.addressLabel ||
                    "No address provided"}
            </Text>

            <Divider my="sm" />

            <Title order={4}>Contact Information</Title>
            <Text>Phone: {company.phone || "Not available"}</Text>
            <Text>Fax: {company.faxNo || "Not available"}</Text>

            <Divider my="sm" />

            <Title order={4}>Analytics</Title>
            <Text>
                Open Jobs Count: {company.analytics?.openJobsCount || 0}
            </Text>
            <Text>
                Total Placements: {company.analytics?.totalPlacements || 0}
            </Text>
            <Text>
                Total Billing Value: {company.analytics?.totalBillingValue || 0}
            </Text>

            <Divider my="sm" />

            <Title order={4}>Industries & Sectors</Title>
            <Group>
                {company.industries.map((industry) => (
                    <Badge key={industry.id} color="blue" size="sm">
                        {industry.name}
                    </Badge>
                ))}
                {company.sectors.map((sector) => (
                    <Badge key={sector.id} color="teal" size="sm">
                        {sector.name}
                    </Badge>
                ))}
            </Group>

            <Divider my="sm" />

            <Title order={4}>Company Owner</Title>
            <Text>{company.ownerName || "Not assigned"}</Text>

            <Divider my="sm" />

            <Title order={4}>Additional Information</Title>
            <Text>
                Company Size Code: {company.companySizeCode || "Not provided"}
            </Text>
            <Text>Rating: {company.rating || "No rating"}</Text>
            <Text>Client Status: {company.client ? "Yes" : "No"}</Text>
            <Text>Open Jobs: {company.openJobs ? "Yes" : "No"}</Text>
            <Text>Placements: {company.placements ? "Yes" : "No"}</Text>
        </Card>
    );
};

ViewCompany.propTypes = {
    company: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        website: PropTypes.string,
        email: PropTypes.string,
        logoUrl: PropTypes.string,
        phone: PropTypes.string,
        faxNo: PropTypes.string,
        headOffice: PropTypes.shape({
            name: PropTypes.string,
            address: PropTypes.shape({
                addressLabel: PropTypes.string,
            }),
        }),
        analytics: PropTypes.shape({
            openJobsCount: PropTypes.number,
            totalPlacements: PropTypes.number,
            totalBillingValue: PropTypes.number,
        }),
        industries: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            })
        ),
        sectors: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
            })
        ),
        ownerName: PropTypes.string,
        companySizeCode: PropTypes.string,
        rating: PropTypes.number,
        client: PropTypes.bool,
        openJobs: PropTypes.bool,
        placements: PropTypes.bool,
    }).isRequired,
};

export default ViewCompany;
