import { makeId } from "../../services/util/make-id";

export const CATEGORY_LINKS = [
    {
        id: makeId(),
        text: 'מכבי תל אביב',
        childrens: [
            {
                id: makeId(),
                title: 'ההיסטוריה',
                description: 'כל מה שצריך לדעת על ההיסטוריה המפאורת של האגודה הגדולה בארץ, מ-1906 ועד היום.',
                path: '#',
                img: 'mta-history.png'
            },
            {
                id: makeId(),
                title: 'עונות',
                description: 'למעלה מ-300 עונות שיחקו קבוצות מכבי בכל המסגרות. האם אתם בקיאים בכל הפרטים?',
                path: '#',
                img: 'mta-season.png'
            },
            {
                id: makeId(),
                title: 'מתקנים',
                description: 'מיד אליהו האגדי ועד מגרש מכבי הנשכח.',
                path: '#',
                img: 'mta-stadium.png'
            },
            {
                id: makeId(),
                title: 'מפעלים',
                description: 'בין אם זה גביע הטוטו ובין אם היורוליג, מכבי תמיד שואפת לזכות בכל המפעלים.',
                path: '#',
                img: 'mta-tournament.png'
            },
            {
                id: makeId(),
                title: 'מדים',
                description: 'המשבצות שנחרטו בזיכרון או הפסים האגדיים, מה אתם מעדיפים?',
                path: '#',
                img: 'mta-uniform.png'
            },
            {
                id: makeId(),
                title: 'תארים',
                description: 'ארון התארים של מכבי כבר מזמן התפוצץ, למזלכם - ריכזנו את כל הזכיות במקום אחד',
                path: '#',
                img: 'mta-trophy.png'
            },
        ]
    },
    {
        id: makeId(),
        text: 'שחקנים וצוות',
        childrens: [
            {
                id: makeId(),
                title: 'שחקנים',
                description: 'ממיקי ברקוביץ\' ועד אבי נמני, למעלה מ-2000 שחקנים לבשו את החולצה הצהובה. האם אתה מכיר את כולם?',
                path: '#',
                img: 'pns-player.png'
            },
            {
                id: makeId(),
                title: 'אנשי צוות',
                description: 'המאמנים, המנהלים המקצועיים, האנשים שעושים את הקבוצה לקבוצה',
                path: '#',
                img: 'pns-staff.png'
            },
        ]
    },
    {
        id: makeId(),
        text: 'אוהדים ותרבות',
        childrens: [
            {
                id: makeId(),
                title: 'שירים',
                description: 'כבר ב-1920 צעקו ההמונים "מה טוב להיות מכבי", ומה שרים כעת?',
                path: '#',
                img: 'cnc-song.png'
            },
            {
                id: makeId(),
                title: 'כרטיסים ומנויים',
                description: 'הכרטיסים שכולנו שומרים, המנויים שכולנו ממסגרים',
                path: '#',
                img: 'cnc-ticket.png'
            },
            {
                id: makeId(),
                title: 'כרזות',
                description: 'בעבר היו זמנים בהם הכרזות על משחקים בוצעו דרך כרזות שנתלו בלוח המודעות',
                path: 'כרזות משחק',
                img: 'cnc-poster.png'
            },
            {
                id: makeId(),
                title: 'אלבומי מדבקות',
                description: 'מפציצים 97, סופרגול, ועוד',
                path: '#',
                img: 'cnc-sticker.png'
            },
            {
                id: makeId(),
                title: 'תפאורות',
                description: 'הקהל צובע את המגרש ומבהיר - באנו כדי לנצח',
                path: '#',
                img: 'cnc-scenery.png'
            },
            {
                id: makeId(),
                title: 'ארגונים',
                description: 'הארגונים שאחראיים על הצבע, השירים והסדר ביציע',
                path: 'crowd-organization',
                img: 'cnc-crowd-organization.png'
            },
            {
                id: makeId(),
                title: 'ספרייה',
                description: 'מסיפור ההקמה ועד הביוגרפיה של ערן זהבי, מכבי בדפוס',
                path: 'library',
                img: 'cnc-book.png'
            },
            {
                id: makeId(),
                title: 'חתימות',
                description: 'תן לי חתימה',
                path: 'signature',
                img: 'cnc-signature.png'
            },
        ]
    },
    {
        id: makeId(),
        text: 'משחקים',
        childrens: [
            {
                id: makeId(),
                title: 'כל המשחקים',
                description: 'תיאור העמוד',
                path: '#',
                img: 'g-games.png'
            },
            {
                id: makeId(),
                title: 'חיפוש משחק',
                description: 'תיאור העמוד',
                path: '#',
                img: 'g-game-search.png'
            },
        ]
    },
    {
        id: makeId(),
        text: 'סטטיסטיקות',
        childrens: [
            {
                id: makeId(),
                title: 'כל הסטטיסטיקות',
                description: 'תיאור העמוד',
                path: '#',
                img: 's-all-stats.png'
            },
            {
                id: makeId(),
                title: 'הרכב סטטיסטיקה',
                description: 'תיאור העמוד',
                path: '#',
                img: 's-build-stats.png'
            },
        ]
    },
    {
        id: makeId(),
        text: 'מכבימדיה',
        childrens: [
            {
                id: makeId(),
                title: 'סרטונים',
                description: 'תיאור העמוד',
                path: '#',
                img: 'mm-video.png'
            },
            {
                id: makeId(),
                title: 'תמונות',
                description: 'תיאור העמוד',
                path: '#',
                img: 'mm-image.png'
            },
            {
                id: makeId(),
                title: 'חיפוש מדיה',
                description: 'תיאור העמוד',
                path: '#',
                img: 'mm-search.png'
            },
        ]
    },
]