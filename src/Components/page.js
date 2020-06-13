import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Sidebar from './sidebar'
import Maincontent from './maincontent'
import Page from './pagecontainer'
import AllPage from './datas/allPage.json'

export default function(props){
  const [ currentPage, setCurrentPage ] = useState(1)
  const totalPage = AllPage.totalPage

  var scrollBarHandler = e => {
    if(e.deltaY > 0){
      setCurrentPage(prevPage => {
        if(prevPage == totalPage) return prevPage
        return prevPage + 1
      })
    }
    else if(e.deltaY < 0){
      if(currentPage <= 1) return
      setCurrentPage(prevPage => {
        if(prevPage == 1) return 1
        return prevPage - 1
      })
    }
  }

  var clickHandler = e => {
    setCurrentPage(parseInt(e.target.dataset.page))

  }

  useEffect(() => {

    window.addEventListener('wheel', scrollBarHandler)
    document.title = AllPage.pageContents[currentPage-1].title

    return () =>
      window.removeEventListener('wheel', scrollBarHandler)
  }, [currentPage])

  return (
    <div className={`${props.isActive ? styles.page : styles.notActive}`}>
      <Sidebar
        sidebarTitle={AllPage.pageContents[currentPage-1].sidebarTitle}
      >
        { AllPage.pageContents[currentPage-1].sidebarInner.map(e => <div>{e}</div>) }
      </Sidebar>



        <Maincontent pageNum={currentPage}>
          <h1> {AllPage.pageContents[currentPage-1].maincontentTitle} </h1>
          { AllPage.pageContents[currentPage-1].maincontentInner.map(e => <div>{e}</div>) }
        </Maincontent>


      <Page totalPage={totalPage} activePage={currentPage} clickHandler={clickHandler} />
    </div>
  )
}
