import { SurveyQuestionStatus, SurveyQuestionPartial, SurveyQuestion } from "store"

const liverSurveyQuestions: SurveyQuestionPartial[] = [
    { text: 'Do you have an infection now or are you currently taking antibiotics?', value: 10 },
    { text: 'In the past 12 months, have you needed treatment in an emergency room, been hospitalized, or had surgery? ', value: 10 },
    { text: 'Have you ever had a blood transfusion from a source other than your own blood?', value: 10 },
    { text: 'Have you ever had problems with general or regional anesthesia? ', value: 10 },
    { text: 'Do you have any food, drug, latex or environmental allergies?', value: 10 },
    { text: 'Have you ever had problems with general or regional anesthesia?', value: 10 },
    // { text: 'liver liver liver', value: 200 },
]

const liverSurvey = new Map<number, SurveyQuestion>(
    [...liverSurveyQuestions, ...liverSurveyQuestions, ...liverSurveyQuestions].map((q, idx) =>
    [idx, { ...q, status: SurveyQuestionStatus.UNSELECTED}]
))

export default liverSurvey
