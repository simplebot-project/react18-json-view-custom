/// <reference types="react" />
import type { CustomizeOptions } from '../types';
interface Props {
    originNode: Array<any>;
    node: Array<any>;
    depth: number;
    index: number;
    deleteHandle?: (_: string | number) => void;
    customOptions?: CustomizeOptions;
    startIndex: number;
}
export default function LargeArrayNode({ originNode, node, depth, index, deleteHandle, customOptions, startIndex }: Props): JSX.Element;
export {};
