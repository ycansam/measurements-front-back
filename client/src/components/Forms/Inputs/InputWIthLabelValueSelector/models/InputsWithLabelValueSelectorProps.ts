export default interface InputWithLabelValueSelectorProps {
    label: string;
    name: string;
    value: string;
    options: string[];
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    required?: boolean;
}