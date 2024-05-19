export class CroDateLocale {
    static Weeks() {
        const weeksDays = [
            "Pon",
            "Uto",
            "Sri",
            "Čet",
            "Pet",
            "Sub",
            "Ned"
        ];
        let weeks = '';
        for(let i = 0; i < weeksDays.length; i++){
            weeks += `<h3>${weeksDays[i]}</h3>`
        };
        return weeks;
    }

    static Months() {
        return [
            "Siječanj",
            "Veljača",
            "Ožujak",
            "Travanj",
            "Svibanj",
            "Lipanj",
            "Srpanj",
            "Kolovoz",
            "Rujan",
            "Listopad",
            "Studeni",
            "Prosinac"
        ]
    }
}