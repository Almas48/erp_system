import axios from "../../../../../axios";

const getCompanyAPI = (page = '', item= '', searchData = '') => {
    // const searchData = SearchData ? `%${SearchData}%` : '';
    // console.log(page, item, searchData);
    return axios.get(`/hrm-system/company?page=${page}&item=${item}&search=${searchData}`);
}

export default getCompanyAPI;