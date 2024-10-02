/// <reference types="react" />
interface Props {
    node: any;
    depth: number;
    deleteHandle?: (indexOrName: string | number) => void;
    editHandle?: (indexOrName: string | number, newValue: any, oldValue: any) => void;
    indexOrName?: number | string;
    parent?: Record<string, any> | Array<any>;
}
export default function JsonNode({ node, depth, deleteHandle: _deleteHandle, indexOrName, parent, editHandle }: Props): JSX.Element;
export {};
