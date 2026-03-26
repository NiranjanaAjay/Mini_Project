/**
 * Disease Prediction Service
 * Handles communication with Flask backend for disease prediction
 */

// Configuration - Update this based on your backend URL
const BACKEND_CONFIG = {
  ANDROID_EMULATOR_URL: 'http://192.168.66.33:8000',
  IOS_SIMULATOR_URL: 'http://192.168.66.33:8000',
  PHYSICAL_DEVICE_URL: 'http://192.168.66.33:8000',
  PRODUCTION_URL: 'http://192.168.66.33:8000',
};

// Select the appropriate URL based on your setup
// For development: use ANDROID_EMULATOR_URL or IOS_SIMULATOR_URL
// For testing on physical device: use PHYSICAL_DEVICE_URL
const BACKEND_URL = BACKEND_CONFIG.PHYSICAL_DEVICE_URL; // Change this as needed

/**
 * Fetch available symptoms from backend
 */
export const fetchAvailableSymptoms = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/symptoms`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.symptoms || [];
  } catch (error) {
    console.error('Error fetching symptoms:', error);
    throw error;
  }
};

/**
 * Predict disease based on selected symptoms
 * @param {Array<string>} symptoms - List of selected symptom names
 * @returns {Promise<Object>} - Predictions with confidence scores
 */
export const predictDisease = async (symptoms) => {
  try {
    if (!symptoms || symptoms.length === 0) {
      throw new Error('At least one symptom must be selected');
    }

    const response = await fetch(`${BACKEND_URL}/predict-disease`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        symptoms: symptoms,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error predicting disease:', error);
    throw error;
  }
};

/**
 * Gets the current backend URL being used
 */
export const getBackendUrl = () => BACKEND_URL;

export default {
  fetchAvailableSymptoms,
  predictDisease,
  getBackendUrl,
};
