/// <reference types="react" />
import { CustomizeOptions } from '../types';
interface Props {
    node: Array<any>;
    depth: number;
    indexOrName?: number | string;
    deleteHandle?: (_: string | number) => void;
    customOptions?: CustomizeOptions;
}
export default function LargeArray({ node, depth, deleteHandle: _deleteSelf, indexOrName, customOptions }: Props): JSX.Element;
export {};
