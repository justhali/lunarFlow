import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:3000/api' });

const saveDates = async (startDate, endDate, category) => {
    try {
      const response = await instance.post('/phases', {
        startDate: startDate,
        endDate: endDate,
        category: category, // 
      });
  
      console.log('Dates successfully added', response.data);
    } catch (error) {
      console.error('Error while saving the dates', error);
    }
  };
