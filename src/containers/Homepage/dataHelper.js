export const addTag = (dataList, index, tagName, refSetState) => {
    // dataList.tagList
    let tempItemList = dataList
    // reset placeholder
    tempItemList[index].placeholderStr = ""

    if (!tempItemList[index].tagList) {
        tempItemList[index].tagList = []
    }
    if (tempItemList[index].tagList.length < 5 && tagName && tagName != '') {
        tempItemList[index].tagList.push(tagName)
        refSetState({ itemList: tempItemList });
    }

}

export const removeTag = (dataList, index, tagIndex, refSetState) => {
    let tempItemList = dataList
    let itemTagList = tempItemList[index].tagList
    if (itemTagList && itemTagList.length) {
        tempItemList[index].tagList.splice(tagIndex, 1);
    }
    refSetState({ itemList:tempItemList });
}

export const inputChange = (dataList, index, newValue, refSetState) => {
    let tempItemList = dataList
    tempItemList[index].placeholderStr = newValue
    refSetState({ itemList: tempItemList });
}

export const filterCriteria = (tagsList, searchStr) => {
    if (searchStr === "") {
        return true
    }

    // return tagsList ? tagsList.indexOf(searchStr) > -1 : false // exact search
    if (tagsList) {
        for (let i = 0; i < tagsList.length; i++) {
            if (tagsList[i].indexOf(searchStr) > -1) {
                return true
            }
        }
    }
    return false
}
