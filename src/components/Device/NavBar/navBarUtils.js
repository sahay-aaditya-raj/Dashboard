// NavBar Sorting
// Sorts the Data of DataComponents


export function NavBarUtilsLg(){
    return(
        <div className="d-none d-lg-block text-center">
            <div className='d-flex text-dark mx-2 pt-2 justify-content-evenly'>
                <div className='p-1 shadow rounded col-2 me-2 text-center align-middle fs-lg-5'>Fulfilment &#128994; &#128308;</div>
                <div className='p-1 shadow rounded col-2 mx-2 text-center align-middle fs-lg-5'>Date &#128994; &#128308;</div>
                <div className='p-1 shadow rounded col-2 mx-2 text-center align-middle fs-lg-5'>Filter &#128994; &#128993; &#128308;</div>
                <div className='rounded-pill shadow p-1 px-2 col ms-2 flex-grow-1'>
                <input type='text' id="search" className='border-0 mx-3 fs-lg-5' placeholder='Search' style={{width:'95%',background:"none"}}/>
                </div>
            </div>
        </div>
)}

export function NavBarUtilsMd(){
    return(
        <div className="d-none d-sm-block d-lg-none text-center fs-5">
            <div className='d-flex text-dark mx-2 pt-2 px-3 justify-content-evenly'>
                <div className='p-1 shadow rounded col-4 mx-1 text-center align-middle fs-lg-5'>Fulfilment &#128994; &#128308;</div>
                <div className='p-1 shadow rounded col-4 mx-1 text-center align-middle fs-lg-5'>Date &#128994; &#128308;</div>
                <div className='p-1 shadow rounded col-4 mx-1 text-center align-middle fs-lg-5'>Filter &#128994; &#128993; &#128308;</div>
            </div>
            <div className='rounded-pill shadow p-1 mt-2 mx-2'>
                <input type='text' id="search2" className='border-0 mx-3 fs-lg-5' placeholder='Search' style={{width:'95%',background:"none"}}/>
            </div>
        </div>
    )
}

export function NavBarUtilsXs(){
    return(
        <div className="d-block d-sm-none text-center">
            <div className='rounded-pill shadow p-1 mt-2 mx-2'>
                <input type='text' id="search2" className='border-0 mx-3 fs-lg-5' placeholder='Search' style={{width:'80%',background:"none"}}/>
            </div>
        </div>
    )
}