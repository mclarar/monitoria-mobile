export interface SearchBarProps {
    placeholder: string;
    onSearch: (query: string)=> void;
    children?: string | JSX.Element | JSX.Element[];
   
}