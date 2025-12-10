import CardData from "./cardData";

export default interface DBResponse {
    status: string;  
    cards: CardData[];
}