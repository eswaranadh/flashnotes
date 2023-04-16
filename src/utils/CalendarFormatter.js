import format from "date-fns/format";
import appconfig from "../config/appconfig.json";

export class CalendarFormatter {
    static standardDateFormat(date) {
        const d1 = new Date(date);
        if (!isNaN(Date.parse(d1))) return format(d1, appconfig.dateformatter);
        return null;
    }
}
