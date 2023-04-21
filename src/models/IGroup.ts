interface IGroup {
	id: string,
	groupName: string
}

export interface IGroupArr {
	groups: IGroup[],
	selectedGroup: string
}

export default IGroup;