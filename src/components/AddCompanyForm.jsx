import { useRef } from "react";
import { TextInput, Button, Group, Textarea } from "@mantine/core";
import PropTypes from "prop-types";
import { createCompany } from "../api/api";
import { generateUUID10 } from "../utils/helper";
// re commit
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
    const handleSubmit = async (e) => {
        e.preventDefault();

        const cpyData = {
            analytics: {
                placementsCurrMonth: 0,
                placementsPrevMonth: 0,
                placementsCurrQrtr: 0,
                placementsPrevQrtr: 0,
                placementsCurrYear: 0,
                placementsPrevYear: 0,
                totalPlacements: 0,
                billingCurrMonth: 0,
                billingPrevMonth: 0,
                billingCurrQrtr: 0,
                billingPrevQrtr: 0,
                billingCurrYear: 0,
                billingPrevYear: 0,
                totalBillingValue: 0,
                openJobsCount: 0,
                jobsCurrMonth: 0,
                jobsPrevMonth: 0,
                jobsCurrQrtr: 0,
                jobsPrevQrtr: 0,
                jobsCurrYear: 0,
                jobsPrevYear: 0,
                totalOpportunities: 1,
                openOpportunities: 1,
                opportunitiesCurrMonth: 1,
                opportunitiesPrevMonth: 0,
                opportunitiesCurrQrtr: 1,
                opportunitiesPrevQrtr: 0,
                opportunitiesCurrYear: 1,
                opportunitiesPrevYear: 0,
                opportunityValueCurrMonth: 0,
                opportunityValuePrevMonth: 0,
                opportunityValueCurrQrtr: 0,
                opportunityValuePrevQrtr: 0,
                opportunityValueCurrYear: 0,
                opportunityValuePrevYear: 0,
                opportunityDealValue: 0,
                lostOpportunityValue: 0,
                totalJobs: 0,
                totalContacts: 1,
                avgOfferToPlacementPct: 0,
                avgInterviewToOfferPct: 0,
                avgOfferToPlacementRatio: null,
                avgInterviewToOfferRatio: null,
                avgClientRejectRate: 0,
                closedJobsPipelineValue: 0,
                openJobsPipelineValue: 0,
                totalPositionsToFill: 0,
                pendingPositionsToFill: 0,
                avgPlacementValue: 0,
                avgTimeToFillCurrYear: 0,
                avgTimeToFillPrevYear: 0,
                avgTimeToFillAllTime: 0,
                avgInterviewToOfferDays: 0,
                avgJobCreatedToSourcedDays: 0,
                avgJobCreatedToShortlistDays: 0,
                avgJobCreatedToApplicationDays: 0,
                avgCVSentToInterviewDays: 0,
                avgOfferToPlacementDays: 0,
            },
            additionalParams: {},
            apolloRecord: null,
            benefitsPackage: "premium",
            client: true,
            companySizeCode: "large",
            companyTypeId: "tech",
            createdBySystem: true,
            createdOn: "04/10/2024 02:49:43",
            description: descriptionRef.current.value,
            distributionListId: "dist123",
            domain: domainRef.current.value,
            email: emailRef.current.value,
            employees: employeesRef.current.value,
            faxNo: "+123456789",
            headOffice: {
                id: "18e72fff-d8f4-4ac6-9b5a-6e6b63a95885",
                name: "Head Office",
                address: {
                    addressLine: "",
                    addressLine2: null,
                    cityName: "London",
                    regionName: "Greater London",
                    postCode: "",
                    countryCode: "GB",
                    latitude: 51.5072178,
                    longitude: -0.1275862,
                    countryName: null,
                    cityOrRegionAndPostCode: "London",
                    country: "United Kingdom",
                    hasCity: true,
                    cityRegion: "London",
                    hasCityOrRegion: true,
                    hasValidGeo: true,
                    hasPostcode: false,
                    hasRegion: true,
                    addressLabel: "London,United Kingdom",
                    hasCountry: true,
                },
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
            parent: null,
            phone: "+1234567890",
            placements: false,
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
                color: "#E7E7E7",
                position: 0,
            },
            statusId: generateUUID10().toString(),
            tags: [],
            termsAgreed: "Yes",
            twitter: null,
            type: "COMPANY",
            udfList: [],
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
