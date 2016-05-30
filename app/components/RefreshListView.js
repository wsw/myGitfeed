import React, {Component} from 'react';
import {
    ListView
} from 'react-native';

class RefreshListView extends Component {
    constructor() {
        this._dataSource = [];
        this._page = 1;
        this._maxPage = this.props.maxPage || -1;
        this._loading = false;
        this._loaded = false;
        this._loadPath = null;
        
        const dataSourceParam = {
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        };
        
        this.state = {
            dataSource: new ListView.DataSource(dataSourceParam),
            loaded: true,
            lastError: {isReloadError: false, error: null},
            isRefresing: false
        }
    }
    
    componentDidMount() {
        this.reloadData();
    }
    
    reloadDataIfNeed() {
        const pathChanged = this._loadPath != this.props.reloadPromisePath();
        if (this._dataSource.length == 0 || pathChanged) {
            this.reloadData();
        }
    }
    
    clearData() {
        this._dataSource = [];
        this._setNeedsRenderList([]);
        this._page = 1;
        this._maxPage = 1;
        this._loading = false;
    }
    
    _pageString(path) {
        const testReg = /\w+[?]\w+/;
        if (testReg.test(path)) {
            path += '&page=' + this._page;
        } else {
            path += '?page' + this._page;
        }
    }
    
    reloadData() {
        let path = this.props.reloadPromisePath();
        this._loadPath = path;
        
        if (!path || this._loading) {
            return ;
        }
        
        this._loading = true;
        this.setState({
            lastError: {isReloadError: false, error: null},
            loaded: this.state.dataSource.getRowCount() > 0,
            isRefresing: true
        });
        
        this._dataSource = [];
        this._page = 1;
        
        path = this._pageString(path);
        
    }
}