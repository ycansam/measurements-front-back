export default interface InputWithLabelProps {
    label: string;
    name: string;
    value: string;
    type: "text" | "password";
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}