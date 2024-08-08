import { Pagination, PaginationItem } from '@mui/material'
import React from 'react'

const ThreePagesPagination = ({ currentPage, setCurrentPage, totalPages }) => {
	return (
		<Pagination
			count={totalPages}
			boundaryCount={0}
			siblingCount={1}
			showFirstButton
			showLastButton
			page={currentPage}
			onChange={(event, value) => {
				setCurrentPage(value)
			}}
			renderItem={(props) => {
				if (
					props.type === 'start-ellipsis' ||
					props.type === 'end-ellipsis'
				) {
					return null
				} else if (
					(currentPage <= 3 &&
						props.type === 'page' &&
						props.page === 4) ||
					(currentPage >= totalPages - 2 &&
						props.type === 'page' &&
						props.page === totalPages - 3)
				) {
					return null
				}
				return <PaginationItem {...props} />
			}}
		/>
	)
}

export default ThreePagesPagination
