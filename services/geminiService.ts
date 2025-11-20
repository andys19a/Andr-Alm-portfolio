import { GoogleGenAI, Chat } from "@google/genai";
import { RESUME_CONTEXT } from '../constants';

let chatSession: Chat | null = null;

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = () => {
  try {
    const ai = getAiClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `Du är en AI-assistent för André Alms portfoliowebbplats. 
        Ditt mål är att svara på frågor om Andrés yrkesbakgrund, färdigheter och projekt baserat STRIKT på kontexten nedan.
        
        Regler:
        1. Var professionell, entusiastisk och koncis. Svara på Svenska.
        2. Om du får frågor om kontaktinfo, ge e-postadressen från kontexten.
        3. Om du får en fråga som inte täcks av kontexten, säg artigt att du inte har den informationen men föreslå att kontakta André direkt.
        4. Betona Andrés styrkor inom React, TypeScript och AI-integration.
        5. Håll svaren under 3-4 meningar om inte detaljer efterfrågas.
        
        Kontext:
        ${RESUME_CONTEXT}`,
        temperature: 0.7,
      }
    });
    return true;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return false;
  }
};

export const sendMessageToGemini = async (message: string) => {
  if (!chatSession) {
    const success = initializeChat();
    if (!success || !chatSession) {
      throw new Error("Chat session could not be initialized. Please check API key.");
    }
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    return result;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};