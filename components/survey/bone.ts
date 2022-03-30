import { SurveyQuestionStatus, SurveyQuestionPartial, SurveyQuestion } from "store"

const boneSurveyQuestions: SurveyQuestionPartial[] = [
    { text: 'Do you have an infection now or are you currently taking antibiotics?', value: 10 },
    { text: 'In the past 12 months, have you needed treatment in an emergency room, been hospitalized, or had surgery? ', value: 10 },
    { text: 'Have you ever had a blood transfusion from a source other than your own blood?', value: 10 },
    { text: 'Have you ever had problems with general or regional anesthesia? ', value: 10 },
    { text: 'Do you have any food, drug, latex or environmental allergies?', value: 10 },
    { text: 'Have you ever had problems with general or regional anesthesia?', value: 10 },
    { text: 'bone bone bone', value: 200 },
]

const boneSurvey = new Map<number, SurveyQuestion>(
    [...boneSurveyQuestions, ...boneSurveyQuestions, ...boneSurveyQuestions].map((q, idx) =>
    [idx, { ...q, status: SurveyQuestionStatus.UNSELECTED}]
))

export default boneSurvey
