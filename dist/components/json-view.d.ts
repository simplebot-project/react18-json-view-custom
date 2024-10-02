/// <reference types="react" />
import type { AddProps, Collapsed, CustomizeCollapseStringUI, CustomizeNode, DeleteProps, DisplaySize, Editable, EditProps } from '../types';
export type OnEdit = (params: EditProps) => void;
export type OnDelete = (params: DeleteProps) => void;
export type OnAdd = (params: AddProps) => void;
export type OnChange = (params: {
    indexOrName: string | number;
    depth: number;
    src: any;
    parentType: 'object' | 'array' | null;
    type: 'add' | 'edit' | 'delete';
}) => void;
type OnCollapse = (params: {
    isCollapsing: boolean;
    node: Record<string, any> | Array<any>;
    indexOrName: string | number | undefined;
    depth: number;
}) => void;
export declare const defaultURLRegExp: RegExp;
export declare const JsonViewContext: import("react").Context<{
    src: any;
    collapseStringsAfterLength: number;
    collapseStringMode: "directly" | "word" | "address";
    customizeCollapseStringUI: CustomizeCollapseStringUI | undefined;
    collapseObjectsAfterLength: number;
    collapsed: Collapsed;
    onCollapse: OnCollapse | undefined;
    enableClipboard: boolean;
    editable: Editable;
    onEdit: OnEdit | undefined;
    onDelete: OnDelete | undefined;
    onAdd: OnAdd | undefined;
    onChange: OnChange | undefined;
    forceUpdate: () => void;
    customizeNode: CustomizeNode | undefined;
    customizeCopy: (node: any) => any;
    displaySize: DisplaySize;
    displayArrayIndex: boolean;
    matchesURL: boolean;
    urlRegExp: RegExp;
    ignoreLargeArray: boolean;
    CopyComponent: import("react").FC<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
    }> | import("react").Component<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
    }, {}, any> | undefined;
    CopiedComponent: import("react").FC<{
        className: string;
        style: React.CSSProperties;
    }> | import("react").Component<{
        className: string;
        style: React.CSSProperties;
    }, {}, any> | undefined;
    EditComponent: import("react").FC<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
        editCustom: (newValue: string) => void;
        value: string | null;
    }> | import("react").Component<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
        editCustom: (newValue: string) => void;
        value: string | null;
    }, {}, any> | undefined;
    CancelComponent: import("react").FC<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
        style: React.CSSProperties;
    }> | import("react").Component<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
        style: React.CSSProperties;
    }, {}, any> | undefined;
    DoneComponent: import("react").FC<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
        style: React.CSSProperties;
    }> | import("react").Component<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
        style: React.CSSProperties;
    }, {}, any> | undefined;
    CustomOperation: import("react").FC<{
        node: any;
    }> | import("react").Component<{
        node: any;
    }, {}, any> | undefined;
}>;
export interface JsonViewProps {
    src: any;
    collapseStringsAfterLength?: number;
    collapseStringMode?: 'directly' | 'word' | 'address';
    customizeCollapseStringUI?: CustomizeCollapseStringUI;
    collapseObjectsAfterLength?: number;
    collapsed?: Collapsed;
    onCollapse?: OnCollapse;
    enableClipboard?: boolean;
    editable?: Editable;
    onEdit?: OnEdit;
    onDelete?: OnDelete;
    onAdd?: OnAdd;
    onChange?: OnChange;
    customizeNode?: CustomizeNode;
    customizeCopy?: (node: any) => any;
    dark?: boolean;
    theme?: 'default' | 'a11y' | 'github' | 'vscode' | 'atom' | 'winter-is-coming';
    displaySize?: DisplaySize;
    displayArrayIndex?: boolean;
    style?: React.CSSProperties;
    className?: string;
    matchesURL?: boolean;
    urlRegExp?: RegExp;
    ignoreLargeArray?: boolean;
    CopyComponent?: React.FC<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
    }> | React.Component<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
    }>;
    CopiedComponent?: React.FC<{
        className: string;
        style: React.CSSProperties;
    }> | React.Component<{
        className: string;
        style: React.CSSProperties;
    }>;
    EditComponent?: React.FC<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
        editCustom: (newValue: string) => void;
        value: string | null;
    }> | React.Component<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
        editCustom: (newValue: string) => void;
        value: string | null;
    }>;
    CancelComponent?: React.FC<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
        style: React.CSSProperties;
    }> | React.Component<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
        style: React.CSSProperties;
    }>;
    DoneComponent?: React.FC<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
        style: React.CSSProperties;
    }> | React.Component<{
        onClick: (event: React.MouseEvent) => void;
        className: string;
        style: React.CSSProperties;
    }>;
    CustomOperation?: React.FC<{
        node: any;
    }> | React.Component<{
        node: any;
    }>;
}
export default function JsonView({ src: _src, collapseStringsAfterLength, collapseStringMode, customizeCollapseStringUI, collapseObjectsAfterLength, collapsed, onCollapse, enableClipboard, editable, onEdit, onDelete, onAdd, onChange, dark, theme, customizeNode, customizeCopy, displaySize, displayArrayIndex, style, className, matchesURL, urlRegExp, ignoreLargeArray, CopyComponent, CopiedComponent, EditComponent, CancelComponent, DoneComponent, CustomOperation, }: JsonViewProps): JSX.Element;
export {};
