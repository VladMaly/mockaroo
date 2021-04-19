import React, { useEffect } from "react"
import "./Homepage.scss"
import Navigation from "../../components/Navigation/Navigation"
import { useMergeState } from "../../utils/stateMerger"
import { addTag, filterCriteria, removeTag, inputChange } from "./dataHelper"

var localStorageName = "MOCKAROO_SAVED_STATE"

function Homepage() {
    const { state, setState } = useMergeState({
        searchStr: "",
        itemList: [],
    })
    useEffect(() => {
        // add reset funtion
        window.resetSavedState = () => {
            window.localStorage.removeItem(localStorageName)
            return "clear saved state"
        }

        // get saved contents
        let savedStateLocal = null
        if (window && window.localStorage) {
            savedStateLocal = window.localStorage.getItem(localStorageName)
        }
        if (!savedStateLocal) {
            // if not saved then default to fetching data

            // fetch data
            fetch("https://my.api.mockaroo.com/movies.json?key=bf3c1c60")
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    let dataJson = data
                    if (dataJson) {
                        setState({ itemList: dataJson })
                    }
                })
        } else {
            savedStateLocal = JSON.parse(savedStateLocal)
            setState(savedStateLocal)
        }
    }, [])
    useEffect(() => {
        window.localStorage.setItem(localStorageName, JSON.stringify(state))
    })
    return (
        <div className="homepage-container">
            <Navigation></Navigation>
            <div className="main-container">
                <div className="search-wrap">
                    <div>
                        <div className="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#9e9e9e">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                            </svg>
                        </div>
                        <input
                            placeholder="Search Tags"
                            value={state.searchStr}
                            onChange={(e) => {
                                setState({ searchStr: e.target.value })
                            }}
                        />
                    </div>
                </div>
                <div className="data-list-wrap">
                    {state.itemList &&
                        state.itemList.map((item, index) => {
                            let isItemTagSpaceAvailable = !item.tagList || (item.tagList && item.tagList.length < 5)
                            return (
                                <div key={index}>
                                    {filterCriteria(item.tagList, state.searchStr) && (
                                        <div className="data-wrap">
                                            <div className="name-wrap">
                                                <div className="text-title">{item.name}</div>
                                                <div className="text-date">{item.created_at}</div>
                                            </div>
                                            <div className="tags-list">
                                                {item.tagList &&
                                                    item.tagList.map((tagItem, tagIndex) => {
                                                        return (
                                                            <div
                                                                className={
                                                                    "tag-wrap " + (state.searchStr && tagItem.indexOf(state.searchStr) != -1 ? "matching-search" : "")
                                                                }
                                                                key={"tagItem_" + index}
                                                            >
                                                                <div className="tag-wrap-text">{tagItem}</div>
                                                                <div className="tag-wrap-svg" onClick={() => removeTag(state.itemList, index, tagIndex, setState)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                                                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                            </div>
                                            <div className="tag-placeholder-wrap">
                                                <div className={"tag-placeholder " + (!isItemTagSpaceAvailable ? "input-disabled" : "")}>
                                                    <input
                                                        disabled={!isItemTagSpaceAvailable}
                                                        placeholder="Placeholder"
                                                        value={item.placeholderStr}
                                                        onChange={(e) => {
                                                            inputChange(state.itemList, index, e.target.value, setState)
                                                        }}
                                                    ></input>
                                                </div>
                                                <div className={"tag-add-button " + (!isItemTagSpaceAvailable ? "block-button" : "")}>
                                                    <button
                                                        disabled={!isItemTagSpaceAvailable}
                                                        onClick={() => addTag(state.itemList, index, item.placeholderStr, setState)}
                                                    >
                                                        Add Tag
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default Homepage
