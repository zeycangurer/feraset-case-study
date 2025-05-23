import { collection, addDoc, serverTimestamp, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

/**
 * Creates a new generation request in Firestore.
 * This simulates a prompt submission to an AI model.
 *
 * @param {string} inputText - The text prompt entered by the user
 * @param {string} selectedStyle - The selected logo style
 * @returns {Promise<string>} - The document ID of the newly created request
 */
export const createGenerationRequest = async (inputText, selectedStyle) => {
  try {
    const docRef = await addDoc(collection(db, 'generations'), {
      prompt: inputText,
      selectedStyle,
      status: 'processing',
      resultImageUrl: '',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    // console.log("Firestore doc created:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Firestore create failed: ", error)
  }

};

/**
 * Updates the status and optionally the result image URL of a generation request.
 * This can simulate the AI process completion.
 *
 * @param {string} docId - The ID of the Firestore document to update
 * @param {string} status - The new status ("processing" | "done")
 * @param {string} [imageUrl] - Optional: the generated image URL (mock or real)
 */
export const updateGenerationStatus = async (docId, status, imageUrl) => {
  try {
    const docRef = doc(db, 'generations', docId);
    await updateDoc(docRef, {
      status,
      resultImageUrl: imageUrl || '',
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Firestore update failed: ", error)

  }

};

/**
 * Retrieves the generation result from Firestore using its document ID.
 *
 * @param {string} docId - The ID of the document to retrieve
 * @returns {Promise<Object|null>} - The document data if it exists, otherwise null
 */
export const getGenerationResult = async (docId) => {
  try {
    const docRef = doc(db, 'generations', docId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error("Firestore get failed: ", error)
  }
};
