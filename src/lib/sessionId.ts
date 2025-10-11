// lib/sessionId.ts
import { v4 as uuidv4 } from "uuid";

// Formata para XXX-XXX-XXX usando só letras maiúsculas
export function generateSessionId() {
  return uuidv4()
    .replace(/[^A-Za-z]/g, "") // Remove números e traços
    .toUpperCase()
    .slice(0, 9)
    .match(/.{1,3}/g)!
    .join("-");
}
