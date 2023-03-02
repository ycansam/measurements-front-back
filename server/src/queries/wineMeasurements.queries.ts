import WineMeasure from "../models/wineMeasurements.model";
export default class WineMeasurementsQueries {
    public static ADD = ({ year, variety, type, color, temperature, graduation, hydrogen_potencial, observations }: WineMeasure) => "INSERT INTO wine_measurements " + "(year ,variety, type, color, temperature, graduation, hydrogen_potencial, observations)" + " VALUES " + "(" + year + ", '" + variety + "', '" + type + "', '" + color + "', " + temperature + ", " + graduation + ", " + hydrogen_potencial + ", '" + observations + "')"
    public static GET_ALL = () => "SELECT * FROM wine_measurements";
}