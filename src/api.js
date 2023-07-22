// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333', // Substitua pela sua base URL da API
});

export async function addPatient(newPatientData) {
  // Implemente a lógica para enviar os dados do novo paciente para a API
  await axios.post('/api/patients', newPatientData);
}

// export async function fetchPatients(){
//   await axios.get('users?page=1')
// }

export default api
