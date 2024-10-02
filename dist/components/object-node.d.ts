/// <reference types="react" />
import type { CustomizeOptions } from '../types';
interface Props {
    node: Record<string, any> | Array<any>;
    depth: number;
    indexOrName?: number | string;
    deleteHandle?: (_: string | number) => void;
    customOptions?: CustomizeOptions;
}
export default function ObjectNode({ node, depth, indexOrName, deleteHandle: _deleteSelf, customOptions }: Props): JSX.Element | null;
export {};
