import React, { Component } from 'react'
import { Pagination } from '@mui/material'
export class CustomPagination extends Component {
    handlePageChange=(page)=>{
        this.props.setPage(page)
        console.log(page);
        window.scroll(0,0);
    }
    render() {
        return (
            <div className='mt-5 mb-5'>
                <Pagination color='primary' count={10} onChange={(e)=>{this.handlePageChange(e.target.textContent)}}/>
            </div>
        )
    }
}

export default CustomPagination
