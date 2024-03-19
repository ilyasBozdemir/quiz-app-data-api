// Import edilen türleri, API rotası kodu içinde kullanarak kullanabiliriz.
import type { NextApiRequest, NextApiResponse } from 'next';
import data from '@/data/software_questions.json';

type QuestionOption = {
    Id: number;
    Text: string;
    IsCorrect: boolean;
};

type Question = {
    Id: number;
    AskText: string;
    Explanation: string | null;
    Difficulty: 'Easy' | 'Medium' | 'Hard'; 
    QuestionOptions: QuestionOption[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
     
        res.status(200).json(data);
    } catch (error) {
        console.error('Error reading or parsing JSON file:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
