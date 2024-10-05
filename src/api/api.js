import axios from "axios";

const API_KEY = "HIRE840770DDB2F381CA41BA84AA6A9ABE68B0EE";
const BASE_URL = "https://api.recruitly.io/api";

export const api = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${API_KEY}` },
});

export const fetchCompany = (id) => api.get(`/companies/${id}`);
export const createCompany = (data) => api.post(`/company?apiKey=${API_KEY}`, 
    {
        apiKey: API_KEY, 
        companyModel: data,
        
    },
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }
);


/**
 * Fetch companies with specific query parameters.
 * 
 * @param {Object} options - Options for fetching companies.
 * @param {boolean} options.onlyMyRecords - Filter to only return user's records.
 * @param {number} options.pageNumber - The page number for pagination.
 * @param {number} options.pageSize - The number of records per page.
 * @param {string} options.sort - Sort direction, either 'ASC' or 'DESC'.
 * @param {string} options.sortField - The field to sort by.
 * 
 * @returns {Promise} Axios response containing company data.
 */
export const fetchCompanies = ({
    onlyMyRecords = false,
    pageNumber = 0,
    pageSize = 20,
    sort = "DESC",
    sortField = "createdOn",
    } = {}) => {
        return api.get("/company/list", {
            params: {
                apiKey: API_KEY,
                onlyMyRecords,
                pageNumber,
                pageSize,
                sort,
                sortField,
            }
        });
    };