import { useRef } from "react";
import { TextInput, Button, Group, Textarea } from "@mantine/core";
import PropTypes from "prop-types";
import { createCompany } from "../api/api";
import { generateUUID10 } from "../utils/helper";

/**
 * Form to add a new company.
 *
 * @param {function} onCompanyAdded - Callback function to trigger when a company is added.
 */
const AddCompanyForm = ({ onCompanyAdded }) => {
    // useRef hooks to reference form fields
    const nameRef = useRef();
    const descriptionRef = useRef();
    const emailRef = useRef();
    const domainRef = useRef();
    const employeesRef = useRef();
    const addressLineRef = useRef();
    const cityNameRef = useRef();
    const countryNameRef = useRef();
    const postCodeRef = useRef();
    const createdBy = "admin123";
    const handleSubmit = async (e) => {
        e.preventDefault();

        const cpyData = {
            additionalParams: {
                additionalProp1: "string",
                additionalProp2: "string",
                additionalProp3: "string",
            },
            apolloRecord: {
                accountId: "acc12345",
                createdOn: "2024-10-05T04:17:03.036Z",
                emailStatus: "active",
                enableSync: true,
                enrichedByEmail: emailRef.current.value,
                enrichedById: "user789",
                enrichedOn: "2024-10-05T04:17:03.036Z",
                lastSyncOn: "2024-10-05T04:17:03.036Z",
                organizationId: "org5678",
                personId: "person1234",
                recordId: "rec12345",
                recordType: "company",
                syncEnabledByEmail: emailRef.current.value,
                syncEnabledById: createdBy,
                syncEnabledOn: "2024-10-05T04:17:03.036Z",
            },
            benefitsPackage: "premium",
            client: true,
            companySizeCode: "large",
            companyTypeId: "tech",
            createdBySystem: true,
            createdOn: "2024-10-05T04:17:03.036Z",
            description: descriptionRef.current.value,
            distributionListId: "dist123",
            domain: domainRef.current.value,
            email: emailRef.current.value,
            employees: employeesRef.current.value,
            faxNo: "+123456789",
            headOffice: {
                address: {
                    addressLine: addressLineRef.current.value,
                    cityName: cityNameRef.current.value,
                    countryName: countryNameRef.current.value,
                    postCode: postCodeRef.current.value,
                    countryCode: "IN",
                    latitude: 37.7749,
                    longitude: -122.4194,
                    regionName: cityNameRef.current.value,
                },
                id: generateUUID10().toString(),
                name: nameRef.current.value,
            },
            id: "comp4567",
            imageUrl: "https://techcompany.com/logo.png",
            industries: [
                {
                    category: "Technology",
                    createdBy: "admin123",
                    id: "ind456",
                    name: "Artificial Intelligence",
                    position: 1,
                    tenantId: "tenant987",
                    type: {
                        code: "AI",
                        id: "typeAI123",
                        name: "AI Solutions",
                    },
                },
            ],
            labels: [
                {
                    bgColor: "#0000FF",
                    filterId: "filter123",
                    id: "label789",
                    name: "Priority Client",
                    parentLabelId: "label456",
                    parentLabelName: "Client",
                    position: 1,
                    shared: true,
                    textColor: "#FFFFFF",
                    type: "ACTIVE_FILTER",
                },
            ],
            languages: ["English", "Spanish"],
            linkedIn: "https://linkedin.com/company/techcompany",
            logoUrl: "https://techcompany.com/logo.png",
            modifiedOn: "2024-10-05T04:17:03.036Z",
            name: "Tech Company Inc.",
            openJobs: true,
            otherOffices: [
                {
                    address: {
                        addressLine: "456 Innovation Rd",
                        addressLine2: "Floor 10",
                        cityName: "Innovation City",
                        countryCode: "CA",
                        countryName: "Canada",
                        latitude: 45.4215,
                        longitude: -75.6919,
                        postCode: "K1N 9J7",
                        regionName: "Ontario",
                    },
                    id: "office789",
                    name: "Tech Company Canada",
                },
            ],
            ownerId: "owner123",
            ownerName: "John Doe",
            parent: {
                address: {
                    addressLine: "789 Global St",
                    addressLine2: "Unit 101",
                    cityName: "WorldCity",
                    cityNameLower: "worldcity",
                    countryCode: "GB",
                    countryCodeLower: "gb",
                    countryName: "United Kingdom",
                    latitude: 51.5074,
                    longitude: -0.1278,
                    postCode: "WC2N 5DU",
                    regionName: "London",
                },
                alternateEmail: "alt.contact@parentcompany.com",
                cvId: "cv123",
                doNotContact: true,
                email: "parent@parentcompany.com",
                employerName: "Global Tech Parent Co.",
                hasCv: true,
                headline: "Global Leader in Technology",
                homePhone: "+44123456789",
                id: "parent456",
                label: "Global",
                labels: [
                    {
                        bgColor: "#FF0000",
                        filterId: "filter456",
                        id: "label890",
                        name: "Global Partner",
                        parentLabelId: "label123",
                        parentLabelName: "Partner",
                        position: 2,
                        shared: true,
                        textColor: "#FFFFFF",
                        type: "ACTIVE_FILTER",
                    },
                ],
                mobile: "+441234567890",
                ownerId: "owner789",
                ownerName: "Jane Doe",
                rating: 5,
                recordType: "parentCompany",
                reference: "REF123",
                tenantId: "tenant456",
                tenantName: "Global Tenant",
                website: "https://parentcompany.com",
                workPhone: "+441234567890",
            },
            phone: "+1234567890",
            placements: true,
            rating: 4,
            reference: "COMP456",
            sectors: [
                {
                    category: "Technology",
                    createdBy: "admin123",
                    id: "sector123",
                    name: "AI & Machine Learning",
                    position: 1,
                    tenantId: "tenant789",
                    type: {
                        code: "ML",
                        id: "typeML123",
                        name: "Machine Learning",
                    },
                },
            ],
            skills: ["Artificial Intelligence", "Machine Learning"],
            status: {
                category: "Active",
                createdBy: createdBy,
                id: "status123",
                name: "Active",
                position: 1,
                tenantId: "tenant789",
                type: {
                    code: "ACTIVE",
                    id: "typeActive123",
                    name: "Active Status",
                },
            },
            statusId: generateUUID10().toString(),
            tags: [
                {
                    key: "string",
                    value: "string",
                },
            ],
            termsAgreed: "Yes",
            twitter: "",
            type: "ACTIVE_FILTER",
            udfList: [
                {
                    key: {
                        id: "string",
                        inputType: "DROPDOWN OR MULTI_SELECT or INPUT_DATE..",
                    },
                    value: {
                        dateValue: "string",
                        listValue: ["string"],
                        textValue: "string",
                    },
                },
            ],
            website: domainRef.current.value,
        };

        // const companyData = {
        //     name: nameRef.current.value,
        //     description: descriptionRef.current.value,
        //     email: emailRef.current.value,
        //     domain: domainRef.current.value,
        //     employees: employeesRef.current.value,
        //     headOffice: {
        //         address: {
        //             addressLine: addressLineRef.current.value,
        //             cityName: cityNameRef.current.value,
        //             countryName: countryNameRef.current.value,
        //             postCode: postCodeRef.current.value,
        //         },
        //     },
        //     createdOn: new Date().toISOString(),
        // };

        try {
            const response = await createCompany(cpyData);
            if (response.status === 201 || response.status === 200) {
                onCompanyAdded();
            }
        } catch (error) {
            console.error("Error creating company:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                label="Company Name"
                placeholder="Enter company name"
                ref={nameRef}
                required
            />
            <Textarea
                label="Description"
                placeholder="Enter company description"
                ref={descriptionRef}
                required
            />
            <TextInput
                label="Email"
                placeholder="Enter company email"
                ref={emailRef}
                required
            />
            <TextInput
                label="Domain"
                placeholder="Enter company domain"
                ref={domainRef}
            />
            <TextInput
                label="Employees"
                placeholder="Number of employees"
                ref={employeesRef}
            />

            {/* Head Office Address Fields */}
            <TextInput
                label="Head Office Address Line"
                placeholder="Enter address"
                ref={addressLineRef}
            />
            <TextInput
                label="City"
                placeholder="Enter city"
                ref={cityNameRef}
            />
            <TextInput
                label="Country"
                placeholder="Enter country"
                ref={countryNameRef}
            />
            <TextInput
                label="Post Code"
                placeholder="Enter post code"
                ref={postCodeRef}
            />

            <Group position="right">
                <Button type="submit">Add Company</Button>
            </Group>
        </form>
    );
};

// Define PropTypes for the component
AddCompanyForm.propTypes = {
    onCompanyAdded: PropTypes.func.isRequired, // Prop type validation for the callback function
};

export default AddCompanyForm;
