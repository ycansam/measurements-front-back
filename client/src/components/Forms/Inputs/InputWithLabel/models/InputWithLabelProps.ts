export default interface InputWithLabelProps {
    label: string;
    name: string;
    value: string;
    type: "text" | "password" | "number";
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}