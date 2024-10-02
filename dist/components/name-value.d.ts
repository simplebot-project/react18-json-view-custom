/// <reference types="react" />
interface Props {
    indexOrName: number | string;
    value: any;
    depth: number;
    parent?: Record<string, any> | Array<any>;
    deleteHandle: (indexOrName: string | number) => void;
    editHandle: (indexOrName: string | number, newValue: any, oldValue: any) => void;
}
export default function NameValue({ indexOrName, value, depth, parent, deleteHandle, editHandle }: Props): JSX.Element;
export {};
