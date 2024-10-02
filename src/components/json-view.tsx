import { createContext, useCallback, useEffect, useState } from 'react'
import JsonNode from './json-node'
import type { AddProps, Collapsed, CustomizeCollapseStringUI, CustomizeNode, DeleteProps, DisplaySize, Editable, EditProps } from '../types'
import { stringifyForCopying } from '../utils'

export type OnEdit = (params: EditProps) => void
export type OnDelete = (params: DeleteProps) => void
export type OnAdd = (params: AddProps) => void
export type OnChange = (params: {
	indexOrName: string | number
	depth: number
	src: any
	parentType: 'object' | 'array' | null
	type: 'add' | 'edit' | 'delete'
}) => void
type OnCollapse = (params: { isCollapsing: boolean; node: Record<string, any> | Array<any>; indexOrName: string | number | undefined; depth: number }) => void

export const defaultURLRegExp = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/

export const JsonViewContext = createContext({
	src: undefined as any,

	collapseStringsAfterLength: 99,
	collapseStringMode: 'directly' as 'directly' | 'word' | 'address',
	customizeCollapseStringUI: undefined as CustomizeCollapseStringUI | undefined,

	collapseObjectsAfterLength: 20,
	collapsed: false as Collapsed,
	onCollapse: undefined as OnCollapse | undefined,
	enableClipboard: true,

	editable: false as Editable,
	onEdit: undefined as OnEdit | undefined,
	onDelete: undefined as OnDelete | undefined,
	onAdd: undefined as OnAdd | undefined,
	onChange: undefined as OnChange | undefined,

	forceUpdate: () => {},

	customizeNode: undefined as CustomizeNode | undefined,
	customizeCopy: (() => {}) as (node: any) => any,

	displaySize: undefined as DisplaySize,
	displayArrayIndex: true,

	matchesURL: false,
	urlRegExp: defaultURLRegExp,

	ignoreLargeArray: false,

	CopyComponent: undefined as
		| React.FC<{ onClick: (event: React.MouseEvent) => void; className: string }>
		| React.Component<{ onClick: (event: React.MouseEvent) => void; className: string }>
		| undefined,
	CopiedComponent: undefined as
		| React.FC<{ className: string; style: React.CSSProperties }>
		| React.Component<{ className: string; style: React.CSSProperties }>
		| undefined,
	EditComponent: undefined as
	| React.FC<{ onClick: (event: React.MouseEvent) => void; className: string, editCustom: (newValue: string) => void, value: string | null }>
	| React.Component<{ onClick: (event: React.MouseEvent) => void; className: string, editCustom: (newValue: string) => void, value: string | null }>
	| undefined,	
	CancelComponent: undefined as
	| React.FC<{ onClick: (event: React.MouseEvent) => void; className: string; style: React.CSSProperties }>
	| React.Component<{ onClick: (event: React.MouseEvent) => void; className: string; style: React.CSSProperties }>
	| undefined,
	DoneComponent: undefined as
	| React.FC<{ onClick: (event: React.MouseEvent) => void; className: string; style: React.CSSProperties }>
	| React.Component<{ onClick: (event: React.MouseEvent) => void; className: string; style: React.CSSProperties }>
	| undefined,
	CustomOperation: undefined as
	| React.FC<{ node: any }>
	| React.Component<{ node: any }>
	| undefined,
})

export interface JsonViewProps {
	src: any

	collapseStringsAfterLength?: number
	collapseStringMode?: 'directly' | 'word' | 'address'
	customizeCollapseStringUI?: CustomizeCollapseStringUI

	collapseObjectsAfterLength?: number
	collapsed?: Collapsed
	onCollapse?: OnCollapse

	enableClipboard?: boolean

	editable?: Editable
	onEdit?: OnEdit
	onDelete?: OnDelete
	onAdd?: OnAdd
	onChange?: OnChange

	customizeNode?: CustomizeNode
	customizeCopy?: (node: any) => any

	dark?: boolean
	theme?: 'default' | 'a11y' | 'github' | 'vscode' | 'atom' | 'winter-is-coming'

	displaySize?: DisplaySize
	displayArrayIndex?: boolean

	style?: React.CSSProperties
	className?: string

	matchesURL?: boolean
	urlRegExp?: RegExp

	ignoreLargeArray?: boolean

	CopyComponent?:
		| React.FC<{ onClick: (event: React.MouseEvent) => void; className: string }>
		| React.Component<{ onClick: (event: React.MouseEvent) => void; className: string }>
	CopiedComponent?: React.FC<{ className: string; style: React.CSSProperties }> | React.Component<{ className: string; style: React.CSSProperties }>

	EditComponent?:
	| React.FC<{ onClick: (event: React.MouseEvent) => void; className: string, editCustom: (newValue: string) => void, value: string | null }>
	| React.Component<{ onClick: (event: React.MouseEvent) => void; className: string, editCustom: (newValue: string) => void, value: string | null }>

	CancelComponent?:
	| React.FC<{ onClick: (event: React.MouseEvent) => void; className: string; style: React.CSSProperties }>
	| React.Component<{ onClick: (event: React.MouseEvent) => void; className: string; style: React.CSSProperties }>

	DoneComponent?:
	| React.FC<{ onClick: (event: React.MouseEvent) => void; className: string; style: React.CSSProperties }>
	| React.Component<{ onClick: (event: React.MouseEvent) => void; className: string; style: React.CSSProperties }>

	CustomOperation?:
	| React.FC<{ node: any }>
	| React.Component<{ node: any }>
}

export default function JsonView({
	src: _src,

	collapseStringsAfterLength = 99,
	collapseStringMode = 'directly',
	customizeCollapseStringUI,

	collapseObjectsAfterLength = 99,
	collapsed,
	onCollapse,

	enableClipboard = true,

	editable = false,
	onEdit,
	onDelete,
	onAdd,
	onChange,

	dark = false,
	theme = 'default',

	customizeNode,
	customizeCopy = stringifyForCopying,

	displaySize,
	displayArrayIndex = true,

	style,
	className,

	matchesURL = false,
	urlRegExp = defaultURLRegExp,

	ignoreLargeArray = false,

	CopyComponent,
	CopiedComponent,

	EditComponent,
	CancelComponent,
	DoneComponent,
	CustomOperation,
}: JsonViewProps) {
	const [_, update] = useState(0)
	const forceUpdate = useCallback(() => update(state => ++state), [])
	const [src, setSrc] = useState(_src)
	useEffect(() => setSrc(_src), [_src])
	return (
		<JsonViewContext.Provider
			value={{
				src,

				collapseStringsAfterLength,
				collapseStringMode,
				customizeCollapseStringUI,

				collapseObjectsAfterLength,
				collapsed,
				onCollapse,

				enableClipboard,

				editable,
				onEdit,
				onDelete,
				onAdd,
				onChange,

				forceUpdate,

				customizeNode,
				customizeCopy,

				displaySize,
				displayArrayIndex,

				matchesURL,
				urlRegExp,

				ignoreLargeArray,

				CopyComponent,
				CopiedComponent,
				EditComponent,
				CancelComponent,
				DoneComponent,
				CustomOperation,
			}}>
			<code
				className={'json-view' + (dark ? ' dark' : '') + (theme && theme !== 'default' ? ' json-view_' + theme : '') + (className ? ' ' + className : '')}
				style={style}>
				<JsonNode
					node={src}
					depth={1}
					editHandle={(indexOrName: number | string, newValue: any, oldValue: any) => {
						setSrc(newValue)
						if (onEdit)
							onEdit({
								newValue,
								oldValue,
								depth: 1,
								src,
								indexOrName: indexOrName,
								parentType: null
							})
						if (onChange) onChange({ type: 'edit', depth: 1, src, indexOrName: indexOrName, parentType: null })
					}}
					deleteHandle={() => {
						setSrc({})
						if (onDelete)
							onDelete({
								value: src,
								depth: 1,
								src,
								indexOrName: '',
								parentType: null
							})
						if (onChange)
							onChange({
								depth: 1,
								src,
								indexOrName: '',
								parentType: null,
								type: 'delete'
							})
					}}
				/>
			</code>
		</JsonViewContext.Provider>
	)
}
