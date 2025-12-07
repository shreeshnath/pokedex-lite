import React from 'react'


export default function Pagination({ page, pageSize, total, onPage }) {
const totalPages = Math.ceil(total / pageSize)


return (
<div className="pagination">
<button onClick={() => onPage(Math.max(0, page - 1))} disabled={page === 0}>
Prev
</button>
<div className="page-info">Page {page + 1} / {totalPages || 1}</div>
<button onClick={() => onPage(Math.min(totalPages - 1, page + 1))} disabled={page + 1 >= totalPages}>
Next
</button>
</div>
)
}