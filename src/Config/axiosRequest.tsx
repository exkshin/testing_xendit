import axios from "axios";
import globalVariables from "./globalVariables";
import {Buffer} from 'buffer';

/**
 * @description untuk mendapatkan axios
 * @returns axios
 */
export default axios.create({
	baseURL: globalVariables.urlAPI,

	headers: {
		// "Content-Type": "*",
		"Content-Type": "*",
	},
});

/**
 * @description untuk mendapatkan axios dengan header yang sudah ada accesstoken
 * @returns axios
 */
export const AxiosAuth = () => {
	let token = localStorage.getItem("AuthToken") ?? "";
	token = token !== "" ? token.slice(1, token.length - 1) : "";
	return axios.create({
		baseURL: globalVariables.urlAPI,
		headers: {
			// "Content-Type": "multipart/form-data",
			"Content-Type": "*",
			"access_token": token,
		},
	});
}

export const AxiosXenditPayment=()=>{
	let token = Buffer.from('xnd_development_NsMjMQaoQdZjPXAfMBSIQ10h0KaT3Otefhg27megC6Ru6VYPUuWJQAjH82aoUI2E').toString('base64');
	return axios.create({
		baseURL: "https://api.xendit.co/v2/",
		headers: {
			// "Content-Type": "multipart/form-data",
			"Content-Type": "*",
			"Authorization": `Basic ${token}`,
		},
	});
}