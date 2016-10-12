import React, { Component } from 'react';
import { MuiTreeList } from 'react-treeview-mui';



export default class TreeView extends Component {


    constructor(props){
        super(props)

    }
    render() {
        
        //temporary data for
        const listItems = [
            {
                depth: 0,
                children: [1],
                title: 'base'
            },
            {
                depth: 1,
                children: [2],
                parentIndex: 0,
                title: 'Folder 1'
            },
            {
                depth: 2,
                children: [3],
                parentIndex: 1,
                title: 'Folder 2'
            },            
            {
                depth: 3,
                parentIndex: 2,
                title: 'Note 1',
                content: 'this is a test',
            },
            {
                depth: 1,
                children: [],
                parentIndex: 0,
                title: 'Folder 3',
            }
        ];

        const activeList = listItems[3];

        const treeStyle = {
            height: '80vh'
        }

        return (
            <div>
                <MuiTreeList
                    useFolderIcons={true}
                    listItems = {listItems}
                    contentKey = {'title'}
                    listItemIsEnabled={true}
                    activeListItem = {2}
                    expandedListItems = {[1,2]}
                    style = {treeStyle}                
                />
            </div> 
        );
    }
}

